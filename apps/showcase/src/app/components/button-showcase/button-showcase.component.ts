import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { MtlButtonComponent, MtlTabItemComponent, MtlTabsComponent } from '@moontech-components';

@Component({
  selector: 'mtl-button-showcase',
  standalone: true,
  imports: [
    CommonModule, 
    BaseShowcaseComponent, 
    MtlTabsComponent, 
    MtlTabItemComponent, 
    MtlButtonComponent,
  ],
  templateUrl: './button-showcase.component.html',
  styleUrls: ['./button-showcase.component.scss'],
})
export class ButtonShowcaseComponent {
}
