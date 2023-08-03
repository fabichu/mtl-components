import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { MtlButtonComponent, MtlModalComponent, MtlModalService, MtlModalTypes, MtlTabItemComponent, MtlTabsComponent, MtlToggleComponent } from '@moontech-components';

@Component({
  selector: 'mtl-modal-showcase',
  standalone: true,
  imports: [
    CommonModule,
    BaseShowcaseComponent,
    MtlTabsComponent,
    MtlTabItemComponent,
    MtlModalComponent,
    MtlButtonComponent,
    MtlToggleComponent
  ],
  providers: [MtlModalService],
  templateUrl: './modal-showcase.component.html',
})
export class ModalShowcaseComponent {
  private readonly modalService = inject(MtlModalService)
  MtlModalTypes = MtlModalTypes

  big = false

  toggleModal (id: string): void{
    this.modalService.toggle(id)
  }
}
