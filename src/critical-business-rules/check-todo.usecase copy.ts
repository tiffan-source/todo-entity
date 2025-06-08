import type { TodoEntity } from "@entities/todo.entity.js";

export interface CheckTodoUseCase {
  checkTodo: (params: CheckTodoParams) => CheckTodoResponse;
}

export type CheckTodoParams = {
  todo: TodoEntity;
};

export type CheckTodoResponse = TodoEntity | null;
