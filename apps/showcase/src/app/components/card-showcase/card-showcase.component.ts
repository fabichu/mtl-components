import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { MtlTabItemComponent, MtlTabsComponent } from '@moontech-components';
import { MtlCardComponent } from '@moontech-components';

@Component({
    selector: 'mtl-card-showcase',
    standalone: true,
    imports: [
        CommonModule,
        BaseShowcaseComponent,
        MtlTabsComponent,
        MtlTabItemComponent,
        MtlCardComponent,
    ],
    templateUrl: './card-showcase.component.html',
})



export class CardShowcaseComponent {

}