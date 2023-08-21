import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { MtlButtonFloatPosition } from './types/mtl-button';

@Component({
  selector: 'mtl-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mtl-button.component.html',
  styleUrls: ['./mtl-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MtlButtonComponent {
  @Input() type: 'default' | 'save' | 'danger' = 'default'
  @Input() float = false
  @Input() floatPosition: MtlButtonFloatPosition = MtlButtonFloatPosition.BOTTOM_RIGHT
  @Input() disabled = false
  @Input() size: 'big' | 'small' | 'medium' = 'medium'

  @Output() action = new EventEmitter<MouseEvent>()

  public FloatConstants = MtlButtonFloatPosition

  click (event: MouseEvent): void {
    this.action.emit(event)
  }
}
