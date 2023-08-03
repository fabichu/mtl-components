import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtlModalService } from './mtl-modal.service';
import { MtlModalTypes } from './types/modal';

@Component({
  selector: 'mtl-modal',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './mtl-modal.component.html',
})
export class MtlModalComponent implements OnInit {
  private readonly modalService = inject(MtlModalService)
  
  @Input() id: string | null = null
  @Input() open = false
  @Input() big = false
  @Input() type: MtlModalTypes = MtlModalTypes.INFO
  @Input() timeout = 0
  @Input() clickOutside = false

  MtlModalTypes = MtlModalTypes

  ngOnInit(): void {
    if (!this.id) return

    this.modalService.add(this)
  }

  toggle (): void {
    this.open = !this.open
  }

  clickOutsideEvent (): void {
    if (!this.clickOutside) return

    this.open = false
  }
}
