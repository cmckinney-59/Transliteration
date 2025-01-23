import { Component } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.scss'
})
export class LeftSidebarComponent {
  isCollapsed = false;

  toggleNav() {
    this.isCollapsed = !this.isCollapsed;
  }
}
