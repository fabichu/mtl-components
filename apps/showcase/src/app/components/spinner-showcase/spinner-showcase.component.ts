import { Component, ElementRef, HostListener, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { MtlSpinnerComponent, MtlTabItemComponent, MtlTabsComponent, MtlButtonComponent, MtlSpinnerService } from '@moontech-components';

@Component({
  selector: 'mtl-spinner-showcase',
  standalone: true,
  imports: [
    CommonModule,
    BaseShowcaseComponent,
    MtlSpinnerComponent,
    MtlTabsComponent,
    MtlTabItemComponent,
    MtlButtonComponent,
  ],
  templateUrl: './spinner-showcase.component.html'
})

export class SpinnerShowcaseComponent {
  private readonly spinnerService = inject(MtlSpinnerService)

  public embedded = false;
  public showBackdrop = true;


  activar() {
    this.spinnerService.show();

    setTimeout(() => {
      this.spinnerService.hide();
    }, 3000);
  }

  cambioModo() {
    this.embedded = !this.embedded
  }

  backdrop() {
    this.showBackdrop = !this.showBackdrop;
  }
}