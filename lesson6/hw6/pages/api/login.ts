import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

const KEY = 'asdasfadsfafsafasfasfasfafas'

export default function (req: NextApiRequest, res: NextApiResponse) {

    if(!req.body){
        res.statusCode = 404
        res.end('Error')
        return
    }

    const { username, password } = req.body

    res.json({
        token: jwt.sign({
            username,
            password
        }, KEY)
    })
}