import type { ILabel } from "./label.entity.js";

export interface ITodo {
  getId(): string;
  getTitle(): string;
  getDescription(): string;
  getDoneDate(): Date | undefined;
  getDueDate(): Date;
  describe(description: string): string;
  accomplish(): boolean;
  resurrect(): boolean;
  addDeadline(deadline: Date): boolean;
  reportDeadline(deadline: Date): boolean;
  addLabel(label: ILabel): void;
  getLabels(): ILabel[];
}
