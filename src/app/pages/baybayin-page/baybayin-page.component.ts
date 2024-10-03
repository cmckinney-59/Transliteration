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

// This next section is an angular component decorator. It contains metadata for the component.
// The Component decorator tells angular what kind of file this is
@Component({
  // This allows this component to be referrenced in other templates by typing <app-baybayin-page></app-baybayin-page>
  selector: 'app-baybayin-page',
  // This makes this page standalone, meaning it does not need an app module to function and could function on it's own
  standalone: true,
  // This provides imports that would otherwise be declared in the app module. FormsModule: Allows for forms tools. BaybayinDescriptionComponent: Provides description of what and history of Baybayin
  imports: [FormsModule, BaybayinDescriptionComponent, MatDialogModule],
  // This creates a link from this componenet to the corresponding template or html file
  templateUrl: './baybayin-page.component.html',
  // This links the component to the corresponding style sheet
  styleUrls: ['./baybayin-page.component.scss']
})

export class BaybayinPageComponent {

  //------ Variables ------//

  userInput: string = '';
  processedText: string = '';
  processedWordsMap: Map<string, string> = new Map();
  allWords: string[] = [];
  wordsToProcess: string[] = [];

  //------ Constructor ------//
  constructor(
    private baybayinTextProcessorService: BaybayinTextProcessorService,
    private saveFileService: SaveFileService,
    public dialog: MatDialog
  ) {}

  //------ Methods ------//

  // Add the openWordReviewDialog() method here
  async onSubmit(): Promise<void> {
    // Split the user input into words to be processed
    this.allWords = this.userInput.trim().split(/\s+/);
    this.wordsToProcess = [...this.allWords];
  
    // Open the word review dialog with the words to process
    const dialogRef = this.dialog.open(WordReviewDialogComponent, {
      data: {
        words: this.wordsToProcess
      }
    });
  
    // Wait for the dialog to close and process the results if needed
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Handle the processed words or any other data returned from the dialog
        console.log('Word review finished:', result);
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
    await this.onSubmit();
  }
}