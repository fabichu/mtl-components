import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtlCheckboxGroupItemComponent, MtlCheckboxGroupComponent, MtlTabItemComponent, MtlTabsComponent } from '@moontech-components';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';

@Component({
  selector: 'mtl-checkbox-group-showcase',
  standalone: true,
  imports: [
    CommonModule,
    MtlCheckboxGroupComponent,
    MtlCheckboxGroupItemComponent,
    MtlTabsComponent,
    MtlTabItemComponent,
    ReactiveFormsModule,
    BaseShowcaseComponent
  ],
  templateUrl: './checkbox-group-showcase.component.html',
})
export class CheckboxGroupShowcaseComponent {
  private readonly fb = inject(FormBuilder)

  valuesExample1 = ['angular', 'react', 'nestjs', 'mongodb']
  valuesExample2 = ['angular', 'react', 'nestjs', 'mongodb']
  valuesExample3 = [{ name: 'Francisco', age: '57' }, { name: 'Ana', age: '32' }, { name: 'Julia', age: '24' }]
  valuesExample4 = [{ name: 'Isabel', age: '25' }, { name: 'Jorge', age: '44' }, { name: 'Manuel', age: '38' }]

  mtlForm = this.fb.group({
    values1: [[]],
    values2: [['angular', 'nestjs']],
    values3: [[]],
    values4: [[{ name: 'Isabel', age: '25' }, { name: 'Jorge', age: '44' }]],
    values5: null
  })
}
