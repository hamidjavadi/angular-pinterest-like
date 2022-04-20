import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-navbar-circle-button',
  templateUrl: './navbar-circle-button.component.html',
  styleUrls: ['./navbar-circle-button.component.scss']
})
export class NavbarCircleButtonComponent implements OnInit {

  @Input() icon!: IconDefinition;
  @Input() count: number = 0;
  @Input() color!: string;
  @Input() class!: string;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {

    const htmlElement = <HTMLElement>this.el.nativeElement;

    if (this.color) {
      htmlElement.style.color = `${this.color}`;
    }

    if (this.class) {
      const button = htmlElement.querySelector('.navbar-circle-button');

      if (button) {
        button.classList.add(this.class);
      }
    }

  }

}
