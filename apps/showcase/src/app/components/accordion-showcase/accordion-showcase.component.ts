import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { MtlAccordionComponent, MtlTabItemComponent, MtlTabsComponent } from '@moontech-components';

@Component({
  selector: 'mtl-accordion-showcase',
  standalone: true,
  imports: [
    CommonModule,
    BaseShowcaseComponent,
    MtlAccordionComponent,
    MtlTabsComponent,
    MtlTabItemComponent
  ],
  templateUrl: './accordion-showcase.component.html',
})
export class AccordionShowcaseComponent {
}
