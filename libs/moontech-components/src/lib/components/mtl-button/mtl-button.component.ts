import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

enum FloatPosition {
  TOP_RIGHT = 'tr',
  TOP_LEFT = 'tl',
  BOTTOM_RIGHT = 'br',
  BOTTOM_LEFT = 'bl'
}

@Component({
  selector: 'mtl-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mtl-button.component.html',
  styleUrls: ['./mtl-button.component.scss'],
})
export class MtlButtonComponent {
  @Input() type: 'default' | 'save' | 'danger' = 'default'
  @Input() float = false
  @Input() floatPosition: FloatPosition = FloatPosition.BOTTOM_RIGHT
  @Input() size: 'big' | 'small' | 'medium' = 'medium'
}
