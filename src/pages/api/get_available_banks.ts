import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const secretId = process.env.NORDIGEN_SECRET_ID;
    const secretKey = process.env.NORDIGEN_SECRET_KEY;

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

    const response = await fetch("https://ob.nordigen.com/api/v2/institutions/?country=ro", {
        method: "GET",
        headers: {
            "accept": "application/json",
            "Authorization": 'Bearer ' + authToken,
        }
    });

    const data = await response.json();
    res.status(200).json(data);
}
