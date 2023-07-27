import { Injectable, signal } from '@angular/core';

@Injectable()
export class DarkModeService {
  public $mode = signal<boolean>(false)

  public toogle (): void {
    this.$mode.set(!this.$mode())
  }
}
