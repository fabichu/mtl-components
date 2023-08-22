import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { MtlProgressBarComponent, MtlTabItemComponent, MtlTabsComponent, MtlButtonComponent } from '@moontech-components';

@Component({
  selector: 'mtl-progressBar-showcase',
  standalone: true,
  imports: [
    CommonModule,
    BaseShowcaseComponent,
    MtlProgressBarComponent,
    MtlTabsComponent,
    MtlTabItemComponent,
    MtlButtonComponent
  ],
  templateUrl: './progressBar-showcase.component.html',

})
export class ProgressBarShowcaseComponent {

  valueEx1 = 0
  valueEx2 = 20
  valueEx3 = 40
  valueEx4 = 60
  valueEx5 = 80


  increaseEx1() {
    this.valueEx1 >= 90 ? this.valueEx1 = 100 : this.valueEx1 += 10;
  }

  decreaseEx1() {
    this.valueEx1 <= 10 ? this.valueEx1 = 0 : this.valueEx1 -= 10;
  }


  increaseEx2() {
    this.valueEx2 >= 90 ? this.valueEx2 = 100 : this.valueEx2 += 10;
  }

  decreaseEx2() {
    this.valueEx2 <= 10 ? this.valueEx2 = 0 : this.valueEx2 -= 10;
  }


  increaseEx3() {
    this.valueEx3 >= 90 ? this.valueEx3 = 100 : this.valueEx3 += 10;
  }

  decreaseEx3() {
    this.valueEx3 <= 10 ? this.valueEx3 = 0 : this.valueEx3 -= 10;
  }


 increaseEx4() {
  this.valueEx4 >= 90 ? this.valueEx4 = 100 : this.valueEx4 += 10;
  }

  decreaseEx4() {
    this.valueEx4 <= 10 ? this.valueEx4 = 0 : this.valueEx4 -= 10;
  }



  increaseEx5() {
    this.valueEx5 >= 90 ? this.valueEx5 = 100 : this.valueEx5 += 10;
  }

  decreaseEx5() {
    this.valueEx5 <= 10 ? this.valueEx5 = 0 : this.valueEx5 -= 10;
  }

}