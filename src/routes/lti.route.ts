import { Router } from "express"
import ctrl from '../controllers/lti.ctrl'


class Rutas {
    router: Router

    constructor() {
        this.router = Router()
        this.get()
        this.post()
    }

    get() {
        this.router.get('/app', ctrl.index)
        
    }

    post() {
        this.router.post('/login', ctrl.login)
         this.router.get('/jwks', ctrl.jwks)
    }
}

const rutas = new Rutas()
export default rutas.router