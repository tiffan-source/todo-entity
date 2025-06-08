import { TodoEntity } from "@entities/index.js";

export type TodoDto = TodoEntity | null;

export interface CreateTodoUseCase {
  createTodo: (params: CreateTodoParams) => CreateTodoResponse;
}

export type CreateTodoParams = {
  title: string;
  description: string;
  completed: boolean;
  dueDate?: Date;
  labels?: string[];
};

export type CreateTodoResponse = TodoEntity | null;
