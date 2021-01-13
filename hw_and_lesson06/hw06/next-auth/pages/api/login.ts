// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {NextApiRequest, NextApiResponse} from "next";
import jwt from 'jsonwebtoken'

export default (req: NextApiRequest, res: NextApiResponse) => {
    const {email, password} = req.body;
    res.json({
        token: jwt.sign({
            email,
            isAuth: email === 'temp@gmail.com' && password === 'temptemp'
        }, 'xd')
    });
}
