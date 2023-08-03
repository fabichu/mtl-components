import { Injectable } from '@angular/core';
import { MtlModalComponent } from './mtl-modal.component';

@Injectable()
export class MtlModalService {
  private readonly modals: MtlModalComponent[] = []

  add (modal: MtlModalComponent): void {
    this.modals.push(modal)
  }

  toggle (id: string): void {
    const modal = this.modals.find(modal => modal.id === id)
    
    if (!modal) return

    modal.open = !modal.open

    if (modal.timeout && modal.open) {
      setTimeout(() => {
        modal.open = false
      }, modal.timeout)
    }
  }
}
