import type { TodoEntity } from "../entities/todo.entity.js";

export interface UncheckTodoUseCase {
  uncheckTodo: (params: UncheckTodoParams) => UncheckTodoResponse;
}

export type UncheckTodoParams = {
  todo: TodoEntity;
};

export type UncheckTodoResponse = TodoEntity | null;
