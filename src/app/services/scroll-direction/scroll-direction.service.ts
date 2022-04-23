import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { setScrollDirection } from 'src/app/store/app/app.actions';
import { scrollVerticalDirection } from 'src/app/store/app/types';

@Injectable({
  providedIn: 'root'
})
export class ScrollDirectionService {

  scrollLatestX: number = 0;
  scrollLatestY: number = 0;
  listenerHandler: any;

  directionY!: scrollVerticalDirection;

  constructor(
    private store: Store
  ) { }

  startMonitoring() {
    window.addEventListener('scroll', () => { this.monitorScrollDirection() });
  }

  stopMonitoring() {
    window.removeEventListener('scroll', () => { this.monitorScrollDirection() });
  }

  monitorScrollDirection() {

    if (this.scrollLatestY > window.scrollY) {
      this.store.dispatch(setScrollDirection({ scrollDirection: scrollVerticalDirection.Up }));
    } else {
      this.store.dispatch(setScrollDirection({ scrollDirection: scrollVerticalDirection.Down }));

    }

    this.scrollLatestY = window.scrollY;

  }

}
