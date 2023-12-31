import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { animate, group, state, style, transition, trigger } from '@angular/animations';
import { MtlSelectItem } from './types/mtl-dropdown';

@Component({
  selector: 'mtl-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mtl-dropdown.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slideInOut', [
      state('open', style({ height: '*' })),
      state('close', style({ height: 0, paddingTop: 0, paddingBottom: 0, borderWidth: 0 })),
      transition('open <=> close', group([animate('200ms')]))
    ])
  ]
})
export class MtlDropdownComponent<T> implements OnInit {
  @Input() options: MtlSelectItem<T>[] = [];
  @Input() showFilter = true;
  @Input() label = '';
  @Input() labelNoResults = 'No results';
  @Input() placeholder = 'placeholder...';
  @Input() value: T | null = null

  @Output() valueChange: EventEmitter<T> = new EventEmitter<T>;
  @Output() selectOption: EventEmitter<MtlSelectItem<T>> = new EventEmitter<MtlSelectItem<T>>;

  public selectedItem: MtlSelectItem<T> = {} as MtlSelectItem<T>
  public filteredOptions: MtlSelectItem<T>[] = []
  public filter = ''
  public open = false

  ngOnInit(): void {
    const initialValue = this.options.find(op => op.selected)

    if (!initialValue) return

    this.selectedItem = initialValue
    this.valueChange.emit(this.selectedItem.value)
  }

  filterOptions () {
    this.filteredOptions = this.options.filter(option => {
      const normalized = option.label.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return normalized.includes(this.filter.toLowerCase())
    })
  }

  optionSelected (option: MtlSelectItem<T>) {
    this.toogle();
    this.selectedItem = {
      ...option,
      selected: true
    }
    this.selectOption.emit(option)
    this.valueChange.emit(option.value)
  }

  toogle (): void {
    this.open = !this.open
    this.filteredOptions = this.options
  }
}
