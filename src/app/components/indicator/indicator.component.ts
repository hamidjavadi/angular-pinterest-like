import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss']
})
export class IndicatorComponent implements OnInit {

  @Input() size: string = '50px';

  constructor() { }

  ngOnInit(): void {
  }

  getStyle() {
    return {
      'height': this.size,
      'width': this.size
    }
  }

}
