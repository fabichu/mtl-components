import { MtlTabItemComponent, MtlTabsComponent, MtlToast, MtlToastComponent, MtlToastPosition, MtlToastService } from '@moontech-components';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'mtl-toast-showcase',
  standalone: true,
  imports: [
    CommonModule,
    MtlToastComponent, 
    BaseShowcaseComponent,
    MtlTabsComponent,
    MtlTabItemComponent
  ],
  templateUrl: './toast-showcase.component.html',
})
export class ToastShowcaseComponent {
  private readonly toastService = inject(MtlToastService)

  public MtlToastPosition = MtlToastPosition
  public position: MtlToastPosition = MtlToastPosition.TOP_RIGHT

  addToast (type: MtlToast['type'], position?: MtlToastPosition): void {
    if (position) {
      this.position = position
    }
    
    const toast: MtlToast = {
      title: 'Título',
      message: 'Mensaje',
      type
    }

    this.toastService.addToast(toast)
  }
}
