import { Component, EventEmitter, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'mtl-card',
    standalone: true,
    imports: [
        CommonModule,
    ],
    templateUrl: './mtl-card.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class MtlCardComponent {
    @Input() showTitle: boolean = true;

}