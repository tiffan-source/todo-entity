import type { LabelEntity } from "@entities/label.entity.js";
import type { TodoEntity } from "@entities/todo.entity.js";

export interface AddLabelToTodoUseCase {
  addLabelToTodo: (params: AddLabelToTodoParams) => AddLabelToTodoResponse;
}

export type AddLabelToTodoParams = {
  todo: TodoEntity;
  label: LabelEntity;
};

export type AddLabelToTodoResponse = TodoEntity | null;
