import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  processedText: string = '';

  constructor(
    private baybayinTextProcessorService: BaybayinTextProcessorService,
  ) {}

  // Method to return the user input with both 'ng' and 'mga' replaced
  getCombinedOutput(): string {
    let result = this.baybayinTextProcessorService.processBaybayinText(this.userInput);
    this.processedText = result;
    return result
  }

  // Method to copy the processed text to the clipboard
  copyToClipboard(): void {
    navigator.clipboard.writeText(this.processedText).then(() => {
      alert('Text copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }
}
