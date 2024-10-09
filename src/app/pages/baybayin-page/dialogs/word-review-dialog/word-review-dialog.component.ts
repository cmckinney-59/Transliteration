import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaybayinTextProcessorService } from '../../services/replacement-logic/baybayin-text-processor.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-word-review-dialog',
  standalone: true,
  imports: [NgIf],
  templateUrl: './word-review-dialog.component.html',
  styleUrls: ['./word-review-dialog.component.scss']
})
export class WordReviewDialogComponent {
  currentWord: string = '';
  updatedInput: string = '';
  currentChIndex: number = 0;
  currentCIndex: number = 0;

  constructor(
    public dialogRef: MatDialogRef<WordReviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { userInput: string },
    private baybayinTextProcessorService: BaybayinTextProcessorService
  ) {
    this.currentWord = this.data.userInput;
    this.updatedInput = this.currentWord;
    this.currentChIndex = this.updatedInput.indexOf('ch');  // Find the first occurrence of 'ch'
    this.currentCIndex = this.updatedInput.indexOf('c');  // Find the first occurrence of 'ch'
  }

  // Method to move to the next occurrence of 'ch'
  next(): void {
    if (this.currentChIndex !== -1) {
      this.currentChIndex = this.updatedInput.indexOf('ch', this.currentChIndex + 1); // Look for the next 'ch'
    }
  
    if (this.currentChIndex === -1 && this.currentCIndex !== -1) {
      this.currentCIndex = this.updatedInput.indexOf('c', this.currentCIndex + 1); // Look for the next 'c'
    }
  
    if (this.currentChIndex === -1 && this.currentCIndex === -1) {
      this.finish();
    }
  }

  // Replace 'ch' with 'tiy' at the current index
  replaceChWithTiy(): void {
    this.updatedInput = this.updatedInput.slice(0, this.currentChIndex) + 'tiy' + this.updatedInput.slice(this.currentChIndex + 2);
    console.log('Updated word:', this.updatedInput);
    this.next();  // Move to the next occurrence of 'ch'
  }

  // Replace 'ch' with 'k' at the current index
  replaceChWithK(): void {
    this.updatedInput = this.updatedInput.slice(0, this.currentChIndex) + 'k' + this.updatedInput.slice(this.currentChIndex + 2);
    console.log('Updated word:', this.updatedInput);
    this.next();  // Move to the next occurrence of 'ch'
  }
    
  replaceC(replacement: string): void {
    this.currentWord = this.currentWord.replace(/c(?!h)/, replacement);
    this.updatedInput = this.updatedInput.replace(/c(?!h)/, replacement);
    console.log('Updated word:', this.currentWord);
    console.log('Updated input:', this.updatedInput);
  
    if (this.currentWord.match(/c(?!h)/g)) {
      this.showPromptForNextC();
    } else {
      this.next();
    }
  }

  replaceCWithS(): void {
    this.replaceC('s');
  }
  
  replaceCWithK(): void {
    this.replaceC('k');
  }

  showPromptForNextC(): void {
    // Code to re-display the dialog for 'c' replacement
    console.log('Prompting for the next "c" in:', this.currentWord);
  }

  hasCWithoutCh(word: string): boolean {
    return /c(?!h)/g.test(word); // This checks for 'c' not followed by 'h'
  }

  // Finish and close the dialog, returning the final processed word
  finish(): void {
    const processedText = this.baybayinTextProcessorService.processBaybayinText(this.updatedInput);
    console.log('Processed text:', processedText);
    this.dialogRef.close(processedText);  // Return the final processed text
  }
}