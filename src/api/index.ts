import Router from "koa-router"
import todo from "./todo/todo.api"

const api = new Router()

api.use('/todo', todo.routes())

export default api