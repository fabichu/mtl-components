import { Injectable, signal } from '@angular/core';

@Injectable()
export class DarkModeService {
  public mode = signal<boolean>(false)
  
  toogle (): void {
    localStorage.setItem('darkmode', (!this.mode()).toString())

    const darkmode = localStorage.getItem('darkmode')

    this.mode.set(darkmode === 'true')
  }
}
