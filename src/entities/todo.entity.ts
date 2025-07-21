import type { ILabel } from "./label.entity.js";

export interface ITodo {
  getId(): string;
  getTitle(): string;
  getDescription(): string;
  getDoneDate(): Date | undefined;
  getDueDate(): Date | undefined;
  modifyTitle(title: string): boolean;
  describe(description: string): string;
  accomplish(doneDate?: Date): boolean;
  resurrect(): boolean;
  addDeadline(deadline: Date): boolean;
  reportDeadline(deadline: Date): boolean;
  addLabel(label: ILabel): number;
  removeLabel(label: ILabel): number;
  getLabels(): ILabel[];
}
