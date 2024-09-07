import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BaybayinTextProcessorService } from '../../services/baybayin/baybayin-text-processor.service';
import { ConvertToLowercaseService } from '../../services/baybayin/convert-to-lowercase.service';

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
    private baybayinTextProcessorService: BaybayinTextProcessorService,
    private convertToLowercaseService: ConvertToLowercaseService
  ) {}

  // Method to return the user input with both 'ng' and 'mga' replaced
  getCombinedOutput(): string {
    return this.baybayinTextProcessorService.processBaybayinText(this.userInput);
  }

  getLowercaseService(): string {
    return this.convertToLowercaseService.convertToLowercase(this.userInput);
  }
}
