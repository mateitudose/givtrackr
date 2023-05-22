import {createServerSupabaseClient} from "@supabase/auth-helpers-nextjs";
import {NextApiRequest, NextApiResponse} from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const secretId = process.env.NORDIGEN_SECRET_ID;
    const secretKey = process.env.NORDIGEN_SECRET_KEY;
    const supabaseClient = createServerSupabaseClient({req, res});

    const {data, error} = await supabaseClient.auth.getUser();
    if (error) {
        res.status(401).json({error: error.message});
        return;
    }
    if (!data?.user?.id) {
        res.status(401).json({error: 'Not authenticated'});
        return;
    }
    const owner_id = data.user?.id;

    const {requisition_id} = JSON.parse(req.body);
    if (!requisition_id) {
        res.status(400).json({error: 'Invalid request: requisition_id is missing'});
        return;
    }

    const tokenResponse = await fetch("https://ob.nordigen.com/api/v2/token/new/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            "secret_id": secretId,
            "secret_key": secretKey,
        }),
    });

    const tokenData = await tokenResponse.json();
    const authToken = tokenData['access'];

    if (!authToken) {
        res.status(500).json({error: "Failed to get auth token"});
        return;
    }

    const requisitionResponse = await fetch(`https://ob.nordigen.com/api/v2/requisitions/${requisition_id}/`, {
        method: "GET",
        headers: {
            "accept": "application/json",
            "Authorization": 'Bearer ' + authToken,
        }
    });

    const requisitionData = await requisitionResponse.json();
    if (requisitionData.error) {
        res.status(400).json({error: requisitionData.error});
        return;
    }
    if (requisitionData.status !== 'LN') {
        res.status(400).json({error: 'Requisition has not been authorized yet'});
        return;
    }

    const linkedAccounts = requisitionData.accounts;
    if (!linkedAccounts || linkedAccounts.length === 0) {
        res.status(400).json({error: 'No accounts linked'});
        return;
    }

    for (const account of linkedAccounts) {
        const accountResponse = await fetch(`https://ob.nordigen.com/api/v2/accounts/${account}/`, {
            method: "GET",
            headers: {
                "accept": "application/json",
                "Authorization": 'Bearer ' + authToken,
            }
        });

        const accountData = await accountResponse.json();
        if (accountData.error) {
            res.status(400).json({error: accountData.error});
            return;
        }
        let {institution_id, iban} = accountData;
        iban = iban.replace(/(.{4})/g, '$1 ').trim();

        const institutionResponse = await fetch(`https://ob.nordigen.com/api/v2/institutions/${institution_id}/`, {
            method: "GET",
            headers: {
                "accept": "application/json",
                "Authorization": 'Bearer ' + authToken,
            }
        });
        const institutionData = await institutionResponse.json();
        if (institutionData.error) {
            res.status(400).json({error: institutionData.error});
            return;
        }
        const {name, logo} = institutionData;

        const {error: bankAccountsError} = await supabaseClient.from('bank_accounts').insert([
            {
                nordigen_id: account,
                owned_by: owner_id,
                iban: iban,
                bank_id: institution_id,
                bank_name: name,
                bank_logo: logo,
            }]);
        if (bankAccountsError) {
            res.status(500).json({error: bankAccountsError.message});
            return;
        }
    }

    res.status(200).json({success: true});
}
