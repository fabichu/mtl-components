import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mtl-tab-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mtl-tab-item.component.html',
  styleUrls: ['./mtl-tab-item.component.scss'],
})
export class MtlTabItemComponent {
  @Input() title = 'Tab'
  @ViewChild('contentTemplate', {static: false}) contentTemplate: TemplateRef<any> = {} as TemplateRef<any>;

  public selected = false
}
