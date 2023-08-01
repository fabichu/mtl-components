import { Component, ContentChildren, QueryList, ViewEncapsulation, inject } from '@angular/core';
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
  templateUrl: './mtl-navbar.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class MtlNavbarComponent {
  private readonly darkModeService = inject(DarkModeService)

  @ContentChildren(MtlNavbarItemComponent) mtlLinks: QueryList<MtlNavbarItemComponent> = {} as QueryList<MtlNavbarItemComponent>;

  public darkMode = this.darkModeService.mode

  toogleDarkMode (): void {
    this.darkModeService.toogle()
  }
}
