import {TodoListElement, TodoListElementContainer} from "../../constant/type/todo.type";
import {TodoEntity} from "../../entity/TodoEntity";

export class TodoMapper {
    static buildTodoElementList(entities: TodoEntity[]): TodoListElement[] {
        const elements = entities.map(
            x => ({
                id: x.id, contents: x.contents, createdAt: x.createdAt, updatedAt: x.updatedAt
            } as TodoListElement)
        )
        return elements
    }

    static buildTodoElementListContainer (count: number, entities: TodoEntity[]): TodoListElementContainer {
        const elements = TodoMapper.buildTodoElementList(entities)
        return {
            count,
            elements
        }
    }
}