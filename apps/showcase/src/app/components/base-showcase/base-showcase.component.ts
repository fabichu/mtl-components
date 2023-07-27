import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtlAccordionComponent } from '@moontech-components';

@Component({
  selector: 'mtl-base-showcase',
  standalone: true,
  imports: [CommonModule, MtlAccordionComponent],
  templateUrl: './base-showcase.component.html',
  styleUrls: ['./base-showcase.component.scss'],
})
export class BaseShowcaseComponent {
  @Input() title = 'Title'
  @Input() showExamples = true;
  @Input() showCode = true;
  @Input() showInputs = true;
  @Input() showOutputs = true;
  @Input() showTranslations = false;
}
