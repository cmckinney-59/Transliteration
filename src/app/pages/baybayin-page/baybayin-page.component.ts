import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConvertNgAndMgaService } from '../../services/baybayin/convert-ng-and-mga.service';
import { AddPlusAfterConsonantService } from '../../services/baybayin/add-plus-after-consonant.service';
import { RemoveAAfterConsonantService } from '../../services/baybayin/remove-a-after-consonant.service';
import { CapitalizeFirstVowelService } from '../../services/baybayin/capitalize-first-vowel.service';

import { BaybayinTextProcessorService } from '../../services/baybayin/baybayin-text-processor.service';

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
    private addPlusAfterConsonantService: AddPlusAfterConsonantService,
    private removeAAfterConsonantService: RemoveAAfterConsonantService,
    private baybayinTextProcessorService: BaybayinTextProcessorService,
    private capitalizeFirstVowelService: CapitalizeFirstVowelService
  ) {}

  // Method to return the user input with both 'ng' and 'mga' replaced
  getCombinedOutput(): string {
    return this.baybayinTextProcessorService.processBaybayinText(this.userInput);
  }

  getRule1(): string {
    // First apply replaceNgAndMga
    return this.convertNgAndMgaService.replaceNgAndMga(this.userInput);
  }

  getRule2(): string {
    // First apply replaceNgAndMga
    let rule1 = this.convertNgAndMgaService.replaceNgAndMga(this.userInput);
    // Then apply addPlusIfConsonant
    return this.addPlusAfterConsonantService.addPlusIfConsonant(rule1);
  }

  getRule3(): string {
    // First apply replaceNgAndMga
    let rule1 = this.convertNgAndMgaService.replaceNgAndMga(this.userInput);
    // Second apply addPlusIfConsonant
    let rule2 = this.addPlusAfterConsonantService.addPlusIfConsonant(rule1);
    // Then apply removeAIfConsonant
    return this.removeAAfterConsonantService.removeAAfterConsonant(rule2);
  }

  getRule4(): string {
    // First apply replaceNgAndMga
    let rule1 = this.convertNgAndMgaService.replaceNgAndMga(this.userInput);
    // Second apply addPlusIfConsonant
    let rule2 = this.addPlusAfterConsonantService.addPlusIfConsonant(rule1);
    // Third apply removeAIfConsonant
    let rule3 = this.removeAAfterConsonantService.removeAAfterConsonant(rule2);
    // Then apply capitalizeVowel
    return this.capitalizeFirstVowelService.capitalizeVowel(rule3)
  }
}
