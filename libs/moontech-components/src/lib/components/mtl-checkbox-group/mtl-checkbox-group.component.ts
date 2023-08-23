import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtlCheckboxGroupItemComponent } from './ui/mtl-checkbox-group-item/mtl-checkbox-group-item.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'mtl-checkbox-group',
  templateUrl: './mtl-checkbox-group.component.html',
  standalone: true,
  imports: [
    CommonModule, 
    MtlCheckboxGroupItemComponent,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MtlCheckboxGroupComponent,
      multi: true
    }
  ],
})
export class MtlCheckboxGroupComponent<T> implements ControlValueAccessor {
  value: T[] = []

  onChange = (value: T[]) => {}
  onTouch = () => {}

  writeValue(value: T[]): void {
    this.value = value
  }

  registerOnChange(fn: (value: T[]) => void): void {
    this.onChange = fn
  }

  registerOnTouched(fn: () => void): void {
      this.onTouch = fn
  }

  toggleValue (selectedValue: T) {
    const index = this.value.findIndex(value => JSON.stringify(value) === JSON.stringify(selectedValue))

    if (index > -1) {
      this.value.splice(index, 1)
    } else {
      this.value.push(selectedValue)
    }

    this.onChange(this.value)
    this.onTouch()
  }

  isSelected (valueToCheck: T): boolean {
    const exists = this.value.find(value => JSON.stringify(value) === JSON.stringify(valueToCheck))
    
    return exists ? true : false
  }
}
