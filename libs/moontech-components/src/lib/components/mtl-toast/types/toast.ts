export interface MtlToast {
  title: string
  message: string
  type: 'success' | 'error' | 'info' | 'warning'
}

export enum MtlToastPosition {
  TOP_RIGHT='tr',
  TOP_LEFT='tl',
  BOTTOM_RIGHT='br',
  BOTTOM_LEFT='bl'
}