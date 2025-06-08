import type { LabelEntity } from "@entities/index.js";

export interface CreateLabelUseCase {
  createLabel: (params: CreateLabelParams) => CreateLabelResponse;
}

export type CreateLabelParams = {
  name: string;
};

export type CreateLabelResponse = LabelEntity | null;
