import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseShowcaseComponent } from '../base-showcase/base-showcase.component';
import { MtlTabItemComponent, MtlTabsComponent, MtlButtonComponent, MtlGridComponent, MtlGridItem, MtlGridStatus } from '@moontech-components';

@Component({
    selector: 'mtl-grid-showcase',
    standalone: true,
    imports: [
        CommonModule,
        BaseShowcaseComponent,
        MtlTabsComponent,
        MtlTabItemComponent,
        MtlButtonComponent,
        MtlGridComponent
    ],
    templateUrl: './grid-showcase.component.html', 
})

export class GridShowcaseComponent {

    showBorders: boolean = false;

    data1: MtlGridItem<string>[] = [
        { item: { text: '1', value: 'value1' }, status: MtlGridStatus.EMPTY },
        { item: { text: '2', value: 'value2' }, status: MtlGridStatus.FREE },
        { item: { text: '3', value: 'value3' }, status: MtlGridStatus.OCCUPIED },
        { item: { text: '4', value: 'value4' }, status: MtlGridStatus.RESERVED },
        { item: { text: '5', value: 'value5' }, status: MtlGridStatus.FREE },
        { item: { text: '6', value: 'value6' }, status: MtlGridStatus.FREE },
        { item: { text: '7', value: 'value7' }, status: MtlGridStatus.EMPTY },
        { item: { text: '8', value: 'value8' }, status: MtlGridStatus.FREE },
        { item: { text: '9', value: 'value9' }, status: MtlGridStatus.FREE },
        { item: { text: '10', value: 'value10' }, status: MtlGridStatus.OCCUPIED },
    ]

    data2: MtlGridItem<string>[] = [
        { item: { text: '1', value: 'value1' }, status: MtlGridStatus.EMPTY },
        { item: { text: '2', value: 'value2' }, status: MtlGridStatus.FREE },
        { item: { text: '3', value: 'value3' }, status: MtlGridStatus.OCCUPIED },
        { item: { text: '4', value: 'value4' }, status: MtlGridStatus.RESERVED },
        { item: { text: '5', value: 'value5' }, status: MtlGridStatus.FREE },
        { item: { text: '6', value: 'value6' }, status: MtlGridStatus.FREE },
        { item: { text: '7', value: 'value7' }, status: MtlGridStatus.EMPTY },
        { item: { text: '8', value: 'value8' }, status: MtlGridStatus.FREE },
        { item: { text: '9', value: 'value9' }, status: MtlGridStatus.FREE },
        { item: { text: '10', value: 'value10' }, status: MtlGridStatus.OCCUPIED },
    ]
    
    data3: MtlGridItem<string>[] = [
        { item: { text: '1', value: 'value1' }, status: MtlGridStatus.FREE },
        { item: { text: '2', value: 'value2' }, status: MtlGridStatus.OCCUPIED },
        { item: { text: '3', value: 'value3' }, status: MtlGridStatus.FREE },
        { item: { text: '4', value: 'value4' }, status: MtlGridStatus.FREE },
        { item: { text: '5', value: 'value5' }, status: MtlGridStatus.RESERVED },
        { item: { text: '6', value: 'value6' }, status: MtlGridStatus.FREE },
        { item: { text: '7', value: 'value7' }, status: MtlGridStatus.EMPTY },
        { item: { text: '8', value: 'value8' }, status: MtlGridStatus.FREE },
        { item: { text: '9', value: 'value9' }, status: MtlGridStatus.RESERVED },
        { item: { text: '10', value: 'value10' }, status: MtlGridStatus.EMPTY },
    ]
    MtlGridStatus: any;

    toggleBorders() {
        this.showBorders = !this.showBorders;
    }


    clickItem(item: MtlGridItem<any>) {
        switch (item.status) {
            case MtlGridStatus.FREE:
                item.status = MtlGridStatus.RESERVED;
                break;
            case MtlGridStatus.RESERVED:
                item.status = MtlGridStatus.OCCUPIED;
                break;
            case MtlGridStatus.OCCUPIED:
                item.status = MtlGridStatus.EMPTY;
                break;
            case MtlGridStatus.EMPTY:
                item.status = MtlGridStatus.FREE;
                break;
        }
    }
    
}




