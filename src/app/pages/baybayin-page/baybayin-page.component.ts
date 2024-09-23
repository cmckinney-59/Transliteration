import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { SaveFileService } from './services/save-file/baybayin-save-file.service';
import { BaybayinTextProcessorService } from './services/replacement-logic/baybayin-text-processor.service';
import { BaybayinDialogProcessorService } from './dialogs/baybayin-dialog-processor.service';
import { BaybayinDescriptionComponent } from './description/baybayin-description.component';
import { WordReviewDialogComponent } from './dialogs/word-review-dialog/word-review-dialog.component';

@Component({
  selector: 'app-baybayin-page',
  standalone: true,
  imports: [FormsModule, BaybayinDescriptionComponent],
  templateUrl: './baybayin-page.component.html',
  styleUrls: ['./baybayin-page.component.scss']
})
export class BaybayinPageComponent {
  userInput: string = ''; 
  processedText: string = '';
  processedWordsMap: Map<string, string> = new Map(); 
  wordsToProcess: string[] = [];

  constructor(
    private baybayinTextProcessorService: BaybayinTextProcessorService,
    private saveFileService: SaveFileService,
    private baybainDialogProcessorService: BaybayinDialogProcessorService,
    private dialog: MatDialog
  ) {}

  // Method to handle the input and processing
  async getCombinedOutput(): Promise<void> {
    this.wordsToProcess = this.userInput.split(/\s+/); 

    const processedWords: string[] = []; // Instantiate an array of all the processed words

    // Open the dialog to process multiple words
    this.openReviewDialog();
  }

  // Open dialog for reviewing words
  openReviewDialog(): void {
    const dialogRef = this.dialog.open(WordReviewDialogComponent, {
      data: { 
        words: this.wordsToProcess, 
        processedWordsMap: this.processedWordsMap 
      }
    });

    dialogRef.afterClosed().subscribe((processedWordsMap) => {
      if (processedWordsMap) {
        this.processedWordsMap = processedWordsMap;
        this.processedText = Array.from(processedWordsMap.values()).join(' ');
      }
    });
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
    this.saveFileService.generateWordDocument(this.processedText);
  }

  // Call the service to generate and download the .txt file
  generateTextFile(): void {
    this.saveFileService.generateTextFile(this.processedText);
  }

  // Call the service to generate and download the Excel file
  generateExcelFile(): void {
    this.saveFileService.generateExcelFile(this.processedText);
  }

  async onWordFinished() {
    await this.getCombinedOutput();
  }
}
