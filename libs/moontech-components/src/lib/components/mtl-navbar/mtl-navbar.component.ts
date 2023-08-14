import { Component, Input, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModeService } from '../../shared/services/dark-mode.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mtl-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './mtl-navbar.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class MtlNavbarComponent {
  private readonly darkModeService = inject(DarkModeService)

  @Input() showLinks = true

  public darkMode = this.darkModeService.mode

  toogleDarkMode (): void {
    this.darkModeService.toogle()
  }
}
