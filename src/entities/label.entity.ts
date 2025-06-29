export interface ILabel {
  getName(): string;
  setName(name: string): ILabel;
  getId(): string;
  getColor(): string;
  setColor(color: string): ILabel;
}
