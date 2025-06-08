import type { LabelEntity } from "./label.entity.js";

export class TodoEntity {
  constructor(
    private id: string,
    private title: string,
    private completed: boolean,
    private createdAt: Date,
    private updatedAt: Date,
    private description?: string,
    private dueDate?: Date,
    private labels?: LabelEntity[],
  ) {}

  getId(): string {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }

  getDescription(): string | undefined {
    return this.description;
  }

  isCompleted(): boolean {
    return this.completed;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  getDueDate(): Date | undefined {
    return this.dueDate;
  }

  getLabels(): LabelEntity[] | undefined {
    return this.labels;
  }
}
