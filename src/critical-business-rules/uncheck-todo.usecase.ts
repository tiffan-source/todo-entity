import type { TodoEntity } from "@entities/index.js";

export interface UncheckTodoUseCase {
  uncheckTodo: (params: UncheckTodoParams) => UncheckTodoResponse;
}

export type UncheckTodoParams = {
  todo: TodoEntity;
};

export type UncheckTodoResponse = TodoEntity | null;
