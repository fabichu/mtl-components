import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, ViewChild, ContentChild, ElementRef, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'mtl-textarea',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mtl-textarea.component.html',
  encapsulation: ViewEncapsulation.None
})
export class MtlTextareaComponent {

  @Input() placeholder = '';
  @Input() label = '';
  @Input() name = '';
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() required = false;
  @Input() validate = false;
  @Input() inline = false;
  @Input() rows= 10;
  @Input() cols = 60;
  @Input() maxlength: number | null = null;
  @Input() minlength: number | null = null;
  @Input() value = '';
  @Input() resize = true;

  @Output() valueChange = new EventEmitter<string>();

  isValid: boolean | null = null;

  onChange($event: string){
    this.value = $event;

    if(this.validate && this.minlength && this.maxlength) {
      if  (this.value.length >= this.minlength && this.value.length <= this.maxlength) {
        this.isValid = true;
      } else {
        this.isValid = false;
      }
    } 
  
    this.valueChange.emit(this.value);
  }
}


