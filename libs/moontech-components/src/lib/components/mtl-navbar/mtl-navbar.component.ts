import { AfterViewInit, Component, ContentChildren, QueryList, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeService } from '../../shared/services/dark-mode.service';
import { MtlNavbarItemComponent } from './ui/mtl-navbar-item/mtl-navbar-item.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mtl-navbar',
  standalone: true,
  imports: [
    CommonModule,
    MtlNavbarItemComponent,
    RouterModule
  ],
  templateUrl: './mtl-navbar.component.html'
})
export class MtlNavbarComponent implements AfterViewInit{
  private readonly darkModeService = inject(DarkModeService)

  @ContentChildren(MtlNavbarItemComponent) mtlLinks: QueryList<MtlNavbarItemComponent> = {} as QueryList<MtlNavbarItemComponent>;

  public darkMode = this.darkModeService.$mode

  ngAfterViewInit(): void {
    for (const link of this.mtlLinks) {
      console.log(link.path);
    }
  }

  toogleDarkMode (): void {
    this.darkModeService.toogle()
  }
}
