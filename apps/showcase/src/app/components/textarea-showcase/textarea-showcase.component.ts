import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { MtlTabItemComponent, MtlTabsComponent } from '@moontech-components';  
import  { MtlTextareaComponent } from '@moontech-components';  
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'mtl-textarea-showcase',
  standalone: true,
  imports: [
    CommonModule,
    BaseShowcaseComponent,
    MtlTabsComponent,
    MtlTabItemComponent,
    MtlTextareaComponent
  ],
  templateUrl: './textarea-showcase.component.html',
})

export class TextareaShowcaseComponent {

  valueExample1 = "";
  valueExample2 = "Valor de inicio";
  valueExample3 = "";
  valueExample4 = "Este texto es de solo lectura";
  valueExample5 = "No puedes modificar el tamaño de este textarea";
  valueExample6 = "";
}