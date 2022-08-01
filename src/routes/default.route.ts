import { Router } from "express"
import ctrl from '../controllers/default.ctrl'


class Rutas {
    router: Router

    constructor() {
        this.router = Router()
        this.get()
        this.post()
    }

    get() {
        this.router.get('/', ctrl.index)
    }

    post() {
        this.router.get('/', ctrl.index)
    }
}

const rutas = new Rutas()
export default rutas.router