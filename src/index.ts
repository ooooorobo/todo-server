import Koa, {Context} from "koa";
import Router from "koa-router"

const app = new Koa()
const router = new Router()

router.get('/', (ctx, next) => {
    ctx.body = 'hello world'
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(4000, () => {
    console.log('Todo-Server is listening to port 4000')
})

export default app;