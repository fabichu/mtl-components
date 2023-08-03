import { BaseShowcaseComponent } from './../base-showcase/base-showcase.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtlTabItemComponent, MtlTabsComponent, MtlToggleComponent } from '@moontech-components'

@Component({
  selector: 'mtl-toggle-showcase',
  standalone: true,
  imports: [
    CommonModule,
    MtlToggleComponent,
    BaseShowcaseComponent,
    MtlTabsComponent,
    MtlTabItemComponent
  ],
  templateUrl: './toggle-showcase.component.html',
})
export class ToggleShowcaseComponent {
  value1 = false
  value2 = false

  selected($event: boolean) {
    console.log($event);
  }
}
