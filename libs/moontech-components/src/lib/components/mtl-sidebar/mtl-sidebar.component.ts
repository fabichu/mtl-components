import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MtlSidebarItem } from './types/mtl-sidebar-item';

@Component({
  selector: 'mtl-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mtl-sidebar.component.html',
  styleUrls: ['./mtl-sidebar.component.scss'],
})
export class MtlSidebarComponent {
  @Input() items: MtlSidebarItem[] = []
}
