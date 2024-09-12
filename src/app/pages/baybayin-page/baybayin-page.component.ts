import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SaveWordService } from '../../services/baybayin/save-file/save-word.service';
import { SaveTextService } from '../../services/baybayin/save-file/save-text.service';
import { SaveExcelService } from '../../services/baybayin/save-file/save-excel.service';
import { BaybayinTextProcessorService } from '../../services/baybayin/replacement-logic/baybayin-text-processor.service';

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
    private saveWordService: SaveWordService,
    private saveTextService: SaveTextService,
    private saveExcelService: SaveExcelService
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

  // Call the service to generate the Word document
  generateWordDocument(): void {
    this.saveWordService.generateWordDocument(this.processedText);
  }

  // Call the service to generate and download the .txt file
  generateTextFile(): void {
    this.saveTextService.generateTextFile(this.processedText);
  }

  // Call the service to generate and download the Excel file
  generateExcelFile(): void {
    this.saveExcelService.generateExcelFile(this.processedText);
  }
}
