import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'mtl-toggle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mtl-toggle.component.html',
})
export class MtlToggleComponent {
  @Input() showLabel = false
  @Input() labelPosition: 'top' | 'right' | 'bottom' | 'left' = 'left'
  @Input() value = false
  @Input() type: 'success' | 'error' | 'standard' | 'warning' = 'standard'
  @Input() label = 'Toggle me'

  @Output() valueChange = new EventEmitter<boolean>()
  @Output() toggle = new EventEmitter<boolean>()

  selected(): void {
    this.toggle.emit(this.value)
    this.valueChange.emit(this.value)
  }
}
