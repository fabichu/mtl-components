import { Injectable } from '@angular/core';
import { MtlToast } from './types/toast';

@Injectable({
  providedIn: 'root'
})
export class MtlToastService {
  public toasts: MtlToast[] = []
  public timeout = 5000

  addToast (toast: MtlToast): void {
    this.toasts.push(toast)
    
    setTimeout(() => {
      this.closeToast(toast)
    }, this.timeout)
  }

  closeToast (toast: MtlToast): void {
    const index = this.toasts.findIndex(t => t === toast)

    this.toasts.splice(index, 1)
  }
}
