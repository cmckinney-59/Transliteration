//------ Import Section  ------//

// All of the angular imports
// Imports component decorator from core used for all basic functions of components. Component type script files define how components behave.
import { Component } from '@angular/core';
// Imports FormsModule and MatDialog from forms which houses tools to create forms components
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

// All of the custom imports (files I made)
// Imports the SaveFileService which houses tools to save transliterated text into either a word document, text file or excel file
import { SaveFileService } from './services/save-file/baybayin-save-file.service';
// Imports the BaybayinTextProcessorService which provides tools to run user inputs through a series of rules that transliterate the text
import { BaybayinTextProcessorService } from './services/replacement-logic/baybayin-text-processor.service';
// Imports the BaybayinDesctiptionComponent which houses a brief explanation and history of Baybayin 
import { BaybayinDescriptionComponent } from './description/baybayin-description.component';
import { WordReviewDialogComponent } from './dialogs/word-review-dialog/word-review-dialog.component';

//------ Decorator ------//
@Component({
  selector: 'app-baybayin-page',
  standalone: true,
  imports: [FormsModule, BaybayinDescriptionComponent, MatDialogModule],
  templateUrl: './baybayin-page.component.html',
  styleUrls: ['./baybayin-page.component.scss']
})

export class BaybayinPageComponent {
//------ Variables ------//
  userInput: string = '';
  processedText: string = '';
  processedWordsMap: Map<string, string> = new Map();
  allWords: string[] = [];
  wordsToProcess: string[] = [];

  constructor(
    private baybayinTextProcessorService: BaybayinTextProcessorService,
    private saveFileService: SaveFileService,
    public dialog: MatDialog
  ) {}

//------ Methods ------//
  async onSubmit(): Promise<void> {
    if (/[c]|ch|j|qu|[A-Z]/.test(this.userInput)) {
      const dialogRef = this.dialog.open(WordReviewDialogComponent, {
        data: {
          userInput: this.userInput
        }
      });
    
      dialogRef.afterClosed().subscribe((result: string) => {
        if (result) {
          this.processedText = result;
          console.log('Processed text from dialog:', this.processedText);
        }
      });
    }
    const result = this.baybayinTextProcessorService.processBaybayinText(this.userInput);
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
    await this.onSubmit();
  }
}