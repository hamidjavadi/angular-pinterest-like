import { EventEmitter, Injectable, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { setScrollDirection } from 'src/app/store/app/app.actions';
import { scrollVerticalDirection } from 'src/app/store/app/types';


@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  scrollLatestX: number = 0;
  scrollLatestY: number = 0;
  listenerHandler: any;

  directionY!: scrollVerticalDirection;

  @Output() scrollTopChangedEvent: EventEmitter<{ percent: number, top: number }> = new EventEmitter();

  constructor(
    private store: Store
  ) { }

  startMonitoringDirection() {
    window.addEventListener('scroll', () => { this.monitorScrollDirection() });
  }

  stopMonitoringDirection() {
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


  monitorScrollPosition() {
    try {
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollTopPercent = (document.documentElement.scrollTop / scrollHeight) * 100;

      this.scrollTopChangedEvent.emit({
        percent: scrollTopPercent,
        top: document.documentElement.scrollTop
      });

    } catch (error) {

    }
  }

  startMonitoringScrollPosition() {
    window.addEventListener('scroll', () => { this.monitorScrollPosition() })
  }

  stopMonitoringScrollPosition() {
    window.removeEventListener('scroll', () => { this.monitorScrollPosition() })
  }

}
