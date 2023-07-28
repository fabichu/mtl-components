import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { animate, state, style, transition, trigger, group } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mtl-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mtl-accordion.component.html',
  styleUrls: ['./mtl-accordion.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slideInOut', [
      state('open', style({ height: '*' })),
      state('close', style({ height: 0, paddingTop: 0, paddingBottom: 0 })),
      transition('open <=> close', group([animate('400ms')]))
    ])
  ]
})
export class MtlAccordionComponent {
  @Input() title = 'Title';
  @Input() open = false;
  @Output() clickEvent = new EventEmitter<boolean>()

  toogle (): void {
    this.open = !this.open
    this.clickEvent.emit(true)
  }
}
