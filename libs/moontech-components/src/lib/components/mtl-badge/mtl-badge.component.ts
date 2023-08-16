import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule, IMAGE_CONFIG } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MtlBadgeSize, MtlBadgeType } from './types/mtl-badge';


@Component({
  selector: 'mtl-badge',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mtl-badge.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class MtlBadgeComponent {
  @Input() text: string = 'Ejemplo 1';
  @Input() type: MtlBadgeType = MtlBadgeType.INFO;
  @Input() size: MtlBadgeSize = MtlBadgeSize.MEDIUM;
  @Input() customClass: string = '';
  @Input() canClick: boolean = true;

  @Output() clickBadge: EventEmitter<MouseEvent>;

  constructor() {
    this.clickBadge = new EventEmitter<MouseEvent>();
  }

  onclickBadge(event: MouseEvent) {
    if (this.canClick) {
      this.clickBadge.emit(event);
    }
  }
}
