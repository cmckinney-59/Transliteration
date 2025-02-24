import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss'
})
export class LeftSidebarComponent {
  isMobile = false;
  isCollapsed = false;
  
  constructor() {
    this.checkScreenSize();
  }

  toggleNav() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])

  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }
}
