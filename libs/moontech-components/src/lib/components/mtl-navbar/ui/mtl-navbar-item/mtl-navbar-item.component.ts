import { RouterModule } from '@angular/router';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mtl-navbar-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <ng-template>
    </ng-template>
  `
})
export class MtlNavbarItemComponent {
  @Input() path = ''
  @Input() text = ''
}
