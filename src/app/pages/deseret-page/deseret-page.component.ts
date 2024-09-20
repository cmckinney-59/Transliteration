import { Component } from '@angular/core';
import { DeseretDescriptionComponent } from "./deseret-description/deseret-description.component";

@Component({
  selector: 'app-deseret-page',
  standalone: true,
  imports: [DeseretDescriptionComponent],
  templateUrl: './deseret-page.component.html',
  styleUrl: './deseret-page.component.scss'
})
export class DeseretPageComponent {

}
