import {YesNo} from "./enum.type";
import { type } from "os";

export type TodoInput = {
    contents: string
}

export type TodoListElement = {
    id: string
    contents: string
    completed: YesNo
    createdAt: string
    updatedAt: string
}

export type TodoListElementContainer = {
    count: number,
    elements: TodoListElement[]
}
