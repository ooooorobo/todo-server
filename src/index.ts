import Koa from "koa";
import Router from "koa-router"
import bodyParser from "koa-bodyparser";

import dotenv from 'dotenv'

import "reflect-metadata"
import {createConnection} from "typeorm";
import {TypeOrmConfig} from "./lib/orm-config";

import api from "./api"

if (process.env.NODE_ENV === 'local') {
    dotenv.config({path: "script/env/.env.local"})
} else if (process.env.NODE_ENV === 'prod') {
    dotenv.config({path: "script/env/.env.prod"})
}

// [!] 다음 에러 발생 시 - Client does not support authentication protocol requested by server
// 참고 - https://stackoverflow.com/a/50131831/14343719
createConnection(TypeOrmConfig)
    .then(async (connection) => {
        const app = new Koa()

        const router = new Router()

        router.get('/', (ctx, next) => {
            ctx.body = 'hello world'
        })

        router.use('/api', api.routes())

        app.use(bodyParser())
        app.use(router.routes())
        app.use(router.allowedMethods())

        app.listen(4000, () => {
            console.log('')
            console.log(`Server started: ${new Date()}`)
            console.log('Todo-Server is listening to port 4000')
            console.log('')
        })

    }).catch((error) => console.log(error))