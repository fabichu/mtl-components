export interface MtlGridItem<T> {
  item: { text: string, value: T };
  class?: string;
  status: MtlGridStatus;
}

export enum MtlGridStatus {
  EMPTY = 'empty',
  FREE = 'free',
  OCCUPIED = 'occupied',
  RESERVED = 'reserved',
}
