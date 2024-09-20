import { Component } from '@angular/core';
import { AurebeshDescriptionComponent } from "./aurebesh-description/aurebesh-description.component";

@Component({
  selector: 'app-aurebesh-page',
  standalone: true,
  imports: [AurebeshDescriptionComponent],
  templateUrl: './aurebesh-page.component.html',
  styleUrl: './aurebesh-page.component.scss'
})
export class AurebeshPageComponent {

}
