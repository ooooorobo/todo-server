import {EntityManager, Transaction, TransactionManager} from "typeorm";
import {TodoEntity} from "../../entity/TodoEntity";
import {TodoInput, TodoListElement, TodoListElementContainer} from "../../constant/type/todo.type"

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
    static async getAllTodoEntities(
                                  @TransactionManager() manager?: EntityManager
    ): Promise<{ entities: TodoEntity[], count: number }> {
        const txManager = manager!
        const repository = txManager.getRepository(TodoEntity)

        const [entities, count] = await repository
            .createQueryBuilder("todoEntity")
            .getManyAndCount()

        return {
            entities,
            count
        }
    }
}