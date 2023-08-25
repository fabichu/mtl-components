import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewEncapsulation } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MtlGridItem, MtlGridStatus } from "./types/mtl-grid";


@Component({
  selector: "mtl-grid",
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: "./mtl-grid.component.html",
  encapsulation: ViewEncapsulation.None,
})

export class MtlGridComponent<T> {
  @Input() cols = 1;
  @Input() data: MtlGridItem<T>[] = []; 
  @Input() showBorders:boolean = false;
  @Input() borderRound: boolean = false;
  @Input() spacing: number = 0;

  @Output() clickItem = new EventEmitter<MtlGridItem<T>>();

  Status = MtlGridStatus;

  sendItem(item: MtlGridItem<T>){
    this.clickItem.emit(item);
  }
}
