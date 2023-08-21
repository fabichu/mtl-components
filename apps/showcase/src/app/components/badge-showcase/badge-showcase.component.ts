import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { MtlBadgeComponent, MtlBadgeType, MtlBadgeSize, MtlTabItemComponent, MtlTabsComponent } from '@moontech-components';

@Component({
  selector: 'mtl-badge-showcase',
  standalone: true,
  imports: [
    CommonModule,
    BaseShowcaseComponent,
    MtlTabsComponent,
    MtlBadgeComponent,
    MtlTabItemComponent
  ],
  templateUrl: './badge-showcase.component.html',
  styleUrls: ['./badge-showcase.component.scss'],
})
export class BadgeShowcaseComponent {
  MtlBadgeType = MtlBadgeType;
  MtlBadgeSize = MtlBadgeSize;

  constructor() {
  }

  ngOnInit(): void {
  }

  clickBadge(event: MouseEvent) {
    console.log('click en el badge');
  }

}
