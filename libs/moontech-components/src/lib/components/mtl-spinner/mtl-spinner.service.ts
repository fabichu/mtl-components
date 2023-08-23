import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})

export class MtlSpinnerService {
  public visible = signal(false); 

  hide() {
    this.visible.set(false);
  }

  show() {
    this.visible.set(true);
  }
}