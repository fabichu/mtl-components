import { FormsModule } from '@angular/forms';
import { Component, Input, Host } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtlCheckboxGroupComponent } from '../../mtl-checkbox-group.component';

@Component({
  selector: 'mtl-checkbox-group-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mtl-checkbox-group-item.component.html',
})
export class MtlCheckboxGroupItemComponent<T> {
  @Input() value: T = '' as T;
  @Input() label = '';

  constructor(@Host() public checkboxGroup: MtlCheckboxGroupComponent<T>) {}
}
