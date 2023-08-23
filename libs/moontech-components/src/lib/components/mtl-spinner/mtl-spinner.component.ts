import { CommonModule } from "@angular/common";
import { Component, Input, ViewEncapsulation, computed, inject } from "@angular/core";
import { MtlSpinnerService } from "./mtl-spinner.service";

@Component({
  selector: "mtl-spinner",
  standalone:true,
  imports: [CommonModule],
  templateUrl: "./mtl-spinner.component.html",
  encapsulation: ViewEncapsulation.None,
})

export class MtlSpinnerComponent { 
  private readonly spinnerService = inject(MtlSpinnerService)

  @Input() embedded = false;
  @Input() showBackdrop = true;

  visible = computed(() => {
    //change body overflow when is visible and is not embedded
    this.spinnerService.visible() && !this.embedded ? 
      document.body.style.overflow = 'hidden' 
      : document.body.style.overflow = 'auto'

    return this.spinnerService.visible()
  });

  //prevent scroll over spinner container when is not embedded
  preventScroll (event: Event) {
    if (this.embedded) return

    event.preventDefault()
  }
}