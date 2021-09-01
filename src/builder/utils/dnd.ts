export interface DragDropIdValue {
  type: string;
  id: string;
  action: 'drag' | 'drop';
  value?: any;
  [key: string]: any;
}

export const dnd = {
  stringify: (value: DragDropIdValue) => JSON.stringify(value),
  parse: (value: string): DragDropIdValue => JSON.parse(value),
};
