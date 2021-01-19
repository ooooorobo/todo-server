import Router from "koa-router"
import {TodoService} from "../../service/todo/todo.service";
import {TodoInput} from "../../constant/type/todo.type";
import {TodoMapper} from "../../service/todo/todo.mapper";

const todo = new Router()

todo.get("/list", async (ctx, next) => {
    const {entities, count} = await TodoService.getAllTodoEntities()

    const dto = TodoMapper.buildTodoElementListContainer(count, entities)

    const stringified = JSON.stringify(dto)
    ctx.body = stringified
})

todo.post("/add", async (ctx, next) => {
    const {contents} = ctx.request.body
    const todoInput = {contents} as TodoInput

    const entity = await TodoService.createTodoEntity(todoInput)

    const stringified = JSON.stringify(entity)
    ctx.body = stringified
})

export default todo