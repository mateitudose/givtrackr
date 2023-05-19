import {NextApiRequest, NextApiResponse} from 'next'
import {createServerSupabaseClient} from "@supabase/auth-helpers-nextjs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const supabase = createServerSupabaseClient({req, res});
    const {name, email, password} = JSON.parse(req.body)
    const {data, error} = await supabase.auth.signUp({email, password})
    if (error) {
        console.log("Error: ",error)
        res.status(500).json({error: error.message})
    }
    if (data) {
        const {error} = await supabase.from('users').insert([{id: data.user?.id, name, email}])
        if (error) {
            res.status(500).json({error: error.message})
        }
        res.status(200).json({message: 'Succesfully created user'})
    }
}
