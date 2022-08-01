import { Request, Response } from "express"


class Ctrl {
    async index(req: Request, res: Response): Promise<Response | void> {

        return res.status(200).json({ status: 'onLine' })
    }

}

const ctrl = new Ctrl()
export default ctrl