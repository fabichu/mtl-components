import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mtl-navbar-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<div class="mtl-navbar-item w-full hover:bg-gray-800 h-full px-3 py-2 flex items-center">
    <a class="h-full flex items-center w-full" [routerLink]="path">{{ text }}</a>
  </div>`,
})
export class MtlNavbarItemComponent {
  @Input() text = 'Link'
  @Input() path = '/'
}
