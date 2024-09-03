import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaybayinPageComponent } from "./pages/baybayin-page/baybayin-page.component";
import { AurebeshPageComponent } from "./pages/aurebesh-page/aurebesh-page.component";
import { DeseretPageComponent } from "./pages/deseret-page/deseret-page.component";
import { AboutPageComponent } from './pages/about-page/about-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    BaybayinPageComponent, 
    AurebeshPageComponent, 
    DeseretPageComponent, 
    AboutPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'transliteration';
}
