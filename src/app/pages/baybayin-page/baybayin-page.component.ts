import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConvertNgAndMgaService } from '../../services/baybayin/convert-ng-and-mga.service';

@Component({
  selector: 'app-baybayin-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './baybayin-page.component.html',
  styleUrl: './baybayin-page.component.scss'
})
export class BaybayinPageComponent {
  // Variable to store user input
  userInput: string = '';

  constructor(private convertNgAndMgaService: ConvertNgAndMgaService) {}

  // Method to return the user input with both 'ng' and 'mga' replaced
  getCombinedTransformedOutput(): string {
    return this.convertNgAndMgaService.replaceNgAndMga(this.userInput);
  }
}
