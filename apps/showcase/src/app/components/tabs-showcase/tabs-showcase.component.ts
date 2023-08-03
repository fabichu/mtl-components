import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtlTabItemComponent, MtlTabsComponent } from '@moontech-components';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'mtl-tabs-showcase',
  standalone: true,
  imports: [
    CommonModule,
    MtlTabsComponent,
    MtlTabItemComponent,
    BaseShowcaseComponent
  ],
  templateUrl: './tabs-showcase.component.html',
})
export class TabsShowcaseComponent {
  tabSelected ($event: number) {
    console.log($event);
  }
}
