import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConvertNgAndMgaService } from '../../services/baybayin/convert-ng-and-mga.service';
import { AddPlusAfterConsonantService } from '../../services/baybayin/add-plus-after-consonant.service';

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

  constructor(
    private convertNgAndMgaService: ConvertNgAndMgaService, 
    private addPlusAfterConsonantService: AddPlusAfterConsonantService
  ) {}

  // Method to return the user input with both 'ng' and 'mga' replaced
  getCombinedOutput(): string {
    // First apply replaceNgAndMga
    let transformedInput = this.convertNgAndMgaService.replaceNgAndMga(this.userInput);
    // Then apply addPlusIfConsonant
    return this.addPlusAfterConsonantService.addPlusIfConsonant(transformedInput);
  }
}
