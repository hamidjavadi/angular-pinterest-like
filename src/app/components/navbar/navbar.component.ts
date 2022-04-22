import { Component, OnInit } from '@angular/core';
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faBell, faCommentDots } from '@fortawesome/free-solid-svg-icons';

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

  constructor() { }

  ngOnInit(): void {
  }

}
