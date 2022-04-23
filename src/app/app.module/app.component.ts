import { Component, OnInit } from '@angular/core';
import { ScrollDirectionService } from '../services/scroll-direction/scroll-direction.service';
import isMobile from '../utils/isMobile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pinterest';

  constructor(
    private scrollService: ScrollDirectionService
  ) { }

  ngOnInit() {
    if (isMobile) {
      this.scrollService.startMonitoring();
    }
  }

  ngOnDestroy() {
    if (isMobile) {
      this.scrollService.stopMonitoring();
    }
  }

}
