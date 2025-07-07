import type { ITodo } from "entities/todo.entity.js";

export interface ITodoFactory {
  create(title: string): ITodo;
  createWithId(id: string, title: string): ITodo;
}
