import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DarkModeService, MtlNavbarComponent, MtlNavbarItemComponent } from '@moontech-components';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MtlNavbarComponent,
    MtlNavbarItemComponent
  ],
  providers: [DarkModeService],
  selector: 'mtl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'showcase';

  private readonly darkModeService = inject(DarkModeService)

  public darkMode = this.darkModeService.mode

  constructor () {
    this.darkModeService.mode.set(localStorage.getItem('darkmode') === 'true')
  }
}
