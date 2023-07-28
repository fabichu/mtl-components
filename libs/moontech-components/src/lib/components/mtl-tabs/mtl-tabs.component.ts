import { AfterViewInit, Component, ContentChildren, EventEmitter, Output, QueryList, TemplateRef, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtlTabItemComponent } from './ui/mtl-tab-item/mtl-tab-item.component';

@Component({
  selector: 'mtl-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mtl-tabs.component.html',
  styleUrls: ['./mtl-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MtlTabsComponent implements AfterViewInit {
  @ContentChildren(MtlTabItemComponent) tabItems: QueryList<MtlTabItemComponent> = {} as QueryList<MtlTabItemComponent>;
  @Output() tabIndex: EventEmitter<number> = new EventEmitter<number>();

  public contentTemplate: TemplateRef<any> = {} as TemplateRef<any>;

  ngAfterViewInit(): void {
    if(this.tabItems.toArray().length > 0){
      this.open(this.tabItems.toArray()[0])
    }
  }

  open (tab: MtlTabItemComponent): void {
    this.tabItems.toArray().forEach(t => t.selected = false);
    const index = this.tabItems.toArray().findIndex(t => t == tab);
    this.tabIndex.emit(index);
    setTimeout(() => {
      tab.selected = true;
      this.contentTemplate = tab.contentTemplate;
    }, 100);
  }
}
