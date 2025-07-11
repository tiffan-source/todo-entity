import type { ILabel } from "entities/label.entity.js";

export interface ILabelFactory {
  create(name: string): ILabel;
  createWithId(id: string, name: string): ILabel;
}
