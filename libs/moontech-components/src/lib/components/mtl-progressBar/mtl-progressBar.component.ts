import { CommonModule } from "@angular/common";
import { Component, Input, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "mtl-progressBar",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./mtl-progressBar.component.html",
  styleUrls: ["./mtl-progressBar.component.scss"],
  encapsulation: ViewEncapsulation.None,
})

export class MtlProgressBarComponent {


  @Input() showPercentage = false;
  @Input() height = 15;
  @Input() striped = false;
  @Input() animated = false;
  @Input() value = 0

}
