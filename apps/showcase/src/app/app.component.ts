import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DarkModeService, MtlNavbarComponent, MtlNavbarDropdownComponent, MtlNavbarItemComponent, MtlSidebarComponent, MtlSidebarItem } from '@moontech-components';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MtlNavbarComponent,
    MtlNavbarItemComponent,
    MtlNavbarDropdownComponent,
    MtlSidebarComponent
  ],
  providers: [DarkModeService],
  selector: 'mtl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly darkModeService = inject(DarkModeService)

  public darkMode = this.darkModeService.mode
  public sideBarItems: MtlSidebarItem[]

  constructor () {
    this.darkModeService.mode.set(localStorage.getItem('darkmode') === 'true')

    this.sideBarItems = [
      { 
        title: 'Datos', 
        children: [
          { text: 'Accordion', path: '/accordion' },
          { text: 'Modal', path: '/modal' },
          { text: 'Tabs', path: '/tabs' },
          { text: 'Badge', path: '/badge' },
          { text: 'Card', path: '/card' }
        ]
      },
      {
        title: 'Directivas',
        children: [
          { text: 'Click Outside', path: '' }
        ]
      },
      {
        title: 'Formularios',
        children: [
          { text: 'Button', path: '/button' },
          { text: 'Dropdown', path: '/dropdown' },
          { text: 'Toggle', path: '/toggle' },
          { text: 'Textarea', path: '/textarea' }
        ]
      },
      {
        title: 'Utilidades',
      },
      {
        title: 'Otros',
        children: [
          { text: 'Toast', path: '/toast' },
          { text: 'Progress Bar', path: '/progressBar' }
        ]
      }
    ]
  }
}
