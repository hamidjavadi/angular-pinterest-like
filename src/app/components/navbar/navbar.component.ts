import { Component, ElementRef, OnInit } from '@angular/core';
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faBell, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import isMobile from 'src/app/utils/isMobile';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // Fontawesome icons
  iconPinterest = faPinterest;
  iconBell = faBell;
  iconCommentDots = faCommentDots;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.setupNavbar();
  }

  setupNavbar() {
    const navbar: HTMLElement = <HTMLElement>this.el.nativeElement;
    const navbarContainer = navbar.querySelector('.navbar');

    // Set if the device is mobile
    if (isMobile) {
      navbarContainer!.setAttribute('is-mobile', '');
    }
  }

}
