import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss'
})
export class LeftSidebarComponent {

  isCollapsed = false;
  
  constructor() {
    this.checkScreenSize();
  }

  toggleNav() {
    this.isCollapsed = !this.isCollapsed;
  }

  @HostListener('window:resize', ['$event'])
  checkScreenSize() {
    this.isCollapsed = window.innerWidth < 320;
  }
}
