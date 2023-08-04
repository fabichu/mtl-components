import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '../../../../shared/directives/clickOutside.directive';

@Component({
  selector: 'mtl-navbar-dropdown',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective],
  templateUrl: './mtl-navbar-dropdown.component.html',
})
export class MtlNavbarDropdownComponent {
  @Input() text = 'Dropdown'

  open = false
}
