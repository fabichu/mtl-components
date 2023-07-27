import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MtlToastService } from './mtl-toast.service';
import { MtlToastPosition } from './types/toast';


@Component({
  selector: 'mtl-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mtl-toast.component.html',
  styleUrls: ['./mtl-toast.component.scss'],
  animations: [
    trigger('overlayAnimation', [
      state('void', style({
        transform: 'translateY(5%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translate(0)',
        opacity: 1
      })),
      transition('void => visible', animate('225ms ease-out')),
      transition('visible => void', animate('195ms ease-in'))
    ])
  ],
})
export class MtlToastComponent implements OnInit {
  public readonly toastService = inject(MtlToastService)

  @Input() timeout = 5000
  @Input() position: MtlToastPosition = MtlToastPosition.TOP_RIGHT

  public toasts = this.toastService.toasts
  public mtlPositions = MtlToastPosition

  ngOnInit (): void {
    this.toastService.timeout = this.timeout
  }
}
