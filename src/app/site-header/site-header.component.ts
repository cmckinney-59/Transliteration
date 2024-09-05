import { Component } from '@angular/core';
import { BaybayinPageComponent } from '../pages/baybayin-page/baybayin-page.component';

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [BaybayinPageComponent],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss'
})
export class SiteHeaderComponent {

}
