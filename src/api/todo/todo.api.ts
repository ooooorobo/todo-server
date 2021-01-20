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

todo.post("/complete", async (ctx, next) => {
    const {todoId, completed} = ctx.request.body

    const result = await TodoService.setTodoCompleted(todoId, completed)

    ctx.body = result
})

todo.post("/remove", async (ctx, next) => {
    const {todoId} = ctx.request.body

    // TODO :: 권한 확인
    const result = await TodoService.removeTodoEntity(todoId)

    ctx.body = result
})

export default todo