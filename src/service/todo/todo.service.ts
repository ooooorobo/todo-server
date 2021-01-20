import {EntityManager, Transaction, TransactionManager} from "typeorm";
import {TodoEntity} from "../../entity/TodoEntity";
import {TodoInput} from "../../constant/type/todo.type"
import {YesNo} from "../../constant/type/enum.type";
import {getNowDateTime} from "../../lib/dayjs";

export class TodoService {

    @Transaction()
    static async createTodoEntity(input: TodoInput,
                                  @TransactionManager() manager?: EntityManager
    ): Promise<TodoEntity> {
        const txManager = manager!
        const repository = txManager.getRepository(TodoEntity)

        const entity = new TodoEntity()
        entity.contents = input.contents
        entity.targetUserId = "1"
        entity.createdBy = "1"
        entity.updatedBy = "1"

        await repository.save(entity)
        return entity
    }

    @Transaction()
    static async getTodoEntity(todoId: string,
        @TransactionManager() manager?: EntityManager
    ): Promise<TodoEntity> {
        const txManager = manager!
        const repository = txManager.getRepository(TodoEntity)

        const entity = await repository.findOne({id: todoId})

        if (!entity) {
            throw new Error(`Todo does not exist : ${todoId}`)
        }

        return entity
    }

    @Transaction()
    static async getAllTodoEntities(
                                  @TransactionManager() manager?: EntityManager
    ): Promise<{ entities: TodoEntity[], count: number }> {
        const txManager = manager!
        const repository = txManager.getRepository(TodoEntity)

        const [entities, count] = await repository
            .createQueryBuilder("todoEntity")
            .where("todoEntity.locked = 'N'")
            .getManyAndCount()

        return {
            entities,
            count
        }
    }

    @Transaction()
    static async setTodoCompleted(todoId: string,
                                    completed: YesNo,
                                    @TransactionManager() manager?: EntityManager
    ): Promise<TodoEntity> {
        const txManager = manager!
        const repository = txManager.getRepository(TodoEntity)

        const entity = await TodoService.getTodoEntity(todoId, txManager)
        entity.completed = completed.toString()

        await repository.save(entity)

        return entity
    }

    @Transaction()
    static async removeTodoEntity(todoId: string,
                                  @TransactionManager() manager?: EntityManager
    ): Promise<boolean> {
        const txManager = manager!
        const repository = txManager.getRepository(TodoEntity)

        const entity = await TodoService.getTodoEntity(todoId, txManager)
        entity.locked = YesNo.Y.toString()
        entity.deletedAt = getNowDateTime()

        await repository.save(entity)

        return true
    }
}