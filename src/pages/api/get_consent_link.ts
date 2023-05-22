import {NextApiRequest, NextApiResponse} from "next";
import {createServerSupabaseClient} from "@supabase/auth-helpers-nextjs";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const secretId = process.env.NORDIGEN_SECRET_ID;
    const secretKey = process.env.NORDIGEN_SECRET_KEY;
    const supabaseClient = createServerSupabaseClient({req, res});
    if (!secretId || !secretKey) {
        res.status(500).json({error: "Failed to get Nordigen secret id or secret key"});
        return;
    }

    const {data: userData, error} = await supabaseClient.auth.getUser(req.headers.authorization);
    if (error) {
        res.status(500).json({error: "Failed to get user data"});
        return;
    }
    if (!userData) {
        res.status(401).json({error: "User not logged in"});
        return;
    }

    const {institution_id} = JSON.parse(req.body);
    if (!institution_id) {
        res.status(400).json({error: "Invalid request: institution_id is missing"});
        return;
    }
    let redirectLink = req.headers.referer;
    const lastSlashIndex = redirectLink?.lastIndexOf("/");
    if (lastSlashIndex !== -1) {
        redirectLink = redirectLink?.substring(0, lastSlashIndex);
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
        res.status(500).json({error: "Failed to get Nordigen auth token"});
        return;
    }

    const consentResponse = await fetch("https://ob.nordigen.com/api/v2/requisitions/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": 'Bearer ' + authToken,
        },
        body: JSON.stringify({
            "redirect": redirectLink,
            "institution_id": institution_id,
            "user_language": "RO",
        }),
    });

    const consentData = await consentResponse.json();
    res.status(200).json(consentData);
}
