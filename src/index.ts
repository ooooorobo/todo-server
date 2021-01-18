import Koa, {Context} from "koa";
import Router from "koa-router"

import path from 'path'
import dotenv from 'dotenv'

if (process.env.NODE_ENV === 'local') {
    dotenv.config({path: "script/env/.env.local"})
} else if (process.env.NODE_ENV === 'prod') {
    dotenv.config({path: "script/env/.env.prod"})
}

const app = new Koa()
const router = new Router()

router.get('/', (ctx, next) => {
    ctx.body = 'hello world'
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(4000, () => {
    console.log('Todo-Server is listening to port 4000')
    console.log(process.env.STORAGE_DATABASE_PORT)
})

export default app;