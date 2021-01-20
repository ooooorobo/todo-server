import {TodoListElement, TodoListElementContainer} from "../../constant/type/todo.type";
import {TodoEntity} from "../../entity/TodoEntity";
import {YesNo} from "../../constant/type/enum.type";

export class TodoMapper {
    static buildTodoElementList(entities: TodoEntity[]): TodoListElement[] {

        const elements = entities.map(
            x => {
                const completed: YesNo = YesNo[x.completed as keyof typeof YesNo]

                return {
                    id: x.id,
                    contents: x.contents,
                    completed: completed,
                    createdAt: x.createdAt,
                    updatedAt: x.updatedAt
                } as TodoListElement
        })

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