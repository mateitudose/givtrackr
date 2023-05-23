import {NextApiRequest, NextApiResponse} from "next";
import {createServerSupabaseClient} from "@supabase/auth-helpers-nextjs";
import {Transaction} from "@/interfaces/Transaction";

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

    const {account_id} = JSON.parse(req.body);
    if (!account_id) {
        res.status(400).json({error: 'Invalid request: account_id is missing'});
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

    const accountResponse = await fetch(`https://ob.nordigen.com/api/v2/accounts/${account_id}/transactions/`, {
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

    const transactions : Transaction[] = accountData['transactions']['booked'];
    let outflowTransactions : Transaction[] = [];
    for (const transaction of transactions) {
        // Filter out transactions that are not outflow transactions
        if (transaction.transactionAmount.amount[0] !== '-') {
            continue;
        }
        outflowTransactions.push(transaction);
    }
    res.status(200).json({transactions: outflowTransactions});
}
