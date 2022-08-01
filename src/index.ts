import express from "express"
import color from "colors"
import dotenv from 'dotenv'
//
import cors from "cors"
import helmet from 'helmet'
import compression from 'compression'

import https from 'https'



import { optionsHttps } from "./config/httpsOption"
import defaultRoute from "./routes/default.route"
import ltiRoute from "./routes/lti.route"

class Server{

    app: any
    
    
    private rst = require('ltijs').Provider.setup(process.env.LTI_KEY,
            { // Database configuration
                url: 'mongodb://localhost/database',
                connection: { user: '', pass: '' }
            },{

                appRoute: '/', loginRoute: '/login', // Optionally, specify some of the reserved routes
                cookies: {
                    secure: false, // Set secure to true if the testing platform is in a different domain and https is being used
                    sameSite: '' // Set sameSite to 'None' if the testing platform is in a different domain and https is being used
                    },
                devMode: true // Set DevMode to false if running in a production environment with https
                }
            
    )


    constructor(private port?:string|number){

    this.app = express()
    this.config()
    this.middleware()
    this.rutas()   
        

    }

    private config(){

        dotenv.config()

       
        
        this.app.set("port", this.port || process.env.PORT)

    }

    private middleware(){

        this.app.use(express.json());
        this.app.use(helmet())
        this.app.use(compression())
        this.app.use(
        cors({
            origin: '*',
            methods: "GET,POST,PUT,DELETE",
            allowedHeaders: "X-Requested-With,content-type,token,cursoId",
            credentials: true,

        })
    )

    }

    private rutas(){

        this.app.use('/' , ltiRoute)

    }

    async start(){

        var HttpsServer = https.createServer(optionsHttps, this.app);
        HttpsServer.listen(this.app.set("port"),()=>{
            console.log(`${color.yellow("server> ")} ESTADO DEL SERVIDOR HTTPS ${color.red("UP")}`)
            console.log(`${color.yellow("server> ")} HTTPS PUERTO ${color.red(this.app.set("port"))}`)
        })

        this.app.listen(8080, ()=>{
            console.log(`${color.yellow("server> ")} ESTADO DEL SERVIDOR HTTP ${color.red("UP")}`)
            console.log(`${color.yellow("server> ")} HTTP PUERTO ${color.red('8080')}`)
        })
        

    }

}


export default Server