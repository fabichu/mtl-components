import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { MtlDropdownComponent, MtlSelectItem, MtlTabItemComponent, MtlTabsComponent } from '@moontech-components';

interface Example {
  prop1: string
  prop2: string
}

@Component({
  selector: 'mtl-dropdown-showcase',
  standalone: true,
  imports: [
    CommonModule,
    BaseShowcaseComponent,
    MtlDropdownComponent,
    MtlTabsComponent,
    MtlTabItemComponent
  ],
  templateUrl: './dropdown-showcase.component.html',
  styleUrls: ['./dropdown-showcase.component.scss'],
})
export class DropdownShowcaseComponent {
  public optionsEj1: MtlSelectItem<string>[]
  public optionsEj2: MtlSelectItem<string>[]
  public optionsEj3: MtlSelectItem<Example>[]
  public optionsEj4: MtlSelectItem<Example>[]

  public value1 = ''
  public value2 = ''
  public value3 = {}
  public value4 = {}
  public value5 = ''
  public value6 = ''

  constructor () {
    this.optionsEj1 = [
      { label: 'opción 1', value: 'option1'},
      { label: 'opción 2', value: 'option2'},
      { label: 'opción 3', value: 'option3'}
    ]
    this.optionsEj2 = [
      { label: 'opción 1', value: 'option1'},
      { label: 'opción 2', value: 'option2'},
      { label: 'opción 3', value: 'option3', selected: true}
    ]
    this.optionsEj3 = [
      { label: 'opción 1', value: { prop1: 'Hola 1', prop2: 'Mundo 1' }},
      { label: 'opción 2', value: { prop1: 'Hola 2', prop2: 'Mundo 2' }},
      { label: 'opción 3', value: { prop1: 'Hola 3', prop2: 'Mundo 3' }}
    ]
    this.optionsEj4 = [
      { label: 'opción 1', value: { prop1: 'Hola 1', prop2: 'Mundo 1' }},
      { label: 'opción 2', value: { prop1: 'Hola 2', prop2: 'Mundo 2' }},
      { label: 'opción 3', value: { prop1: 'Hola 3', prop2: 'Mundo 3' }, selected: true}
    ]
  }
}
