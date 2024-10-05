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
  // Store words containing 'ch' and 'c' and the current index
  wordsWithCh: string[] = [];
  wordsWithC: string[] = [];
  allWordsToProcess: string [] = [];
  totalWordsToProcess: number = 0;
  currentIndex: number = 0;
  currentWord: string = '';
  updatedInput: string = '';

  constructor(
    public dialogRef: MatDialogRef<WordReviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { userInput: string },
    private baybayinTextProcessorService: BaybayinTextProcessorService
  ) {
    // Split the user input into words and filter those containing 'ch' or 'c'
    this.allWordsToProcess = this.data.userInput.split(' ').filter(word => 
    word.includes('ch') 
    || word.includes('c') 
    || word.includes('j')
    || word.includes('q')
    );
    this.totalWordsToProcess = this.allWordsToProcess.length;
    this.wordsWithCh = this.data.userInput.split(' ').filter(word => word.includes('ch'));
    this.wordsWithC = this.data.userInput.split(' ').filter(word => word.includes('c'));
    
    // Set the current word to the first one in the filtered list of 'ch' or 'c'
    if (this.wordsWithCh.length > 0) {
      this.currentWord = this.wordsWithCh[this.currentIndex];
    } else if (this.wordsWithC.length > 0) {
      this.currentWord = this.wordsWithC[this.currentIndex];
    }

    this.updatedInput = this.data.userInput;
  }

  next(): void {
    // Move to the next word, if available
    if (this.currentIndex < this.wordsWithCh.length - 1) {
      this.currentIndex++;
      this.currentWord = this.wordsWithCh[this.currentIndex];
    } else if (this.currentIndex < this.wordsWithC.length - 1) {
      this.currentIndex++;
      this.currentWord = this.wordsWithC[this.currentIndex];
    } else {
      // If no more words are left, close the dialog and process the text
      this.finish();
    }
  }

  replaceChWithTiy(): void {
    // Replace 'ch' with 'tiy' in the current word
    const updatedWord = this.currentWord.replace(/ch/g, 'tiy');

    // Update the entire input string with the modified word
    this.updatedInput = this.updatedInput.replace(this.currentWord, updatedWord);
    
    console.log('Updated word:', updatedWord); // For debugging purposes
    console.log('Updated input:', this.updatedInput); // Log the updated input

    // Move to the next word after replacement
    this.next();
  }

  replaceChWithK(): void {
    // Replace 'ch' with 'k' in the current word
    const updatedWord = this.currentWord.replace(/ch/g, 'k');

    // Update the entire input string with the modified word
    this.updatedInput = this.updatedInput.replace(this.currentWord, updatedWord);
    
    console.log('Updated word:', updatedWord); // For debugging purposes
    console.log('Updated input:', this.updatedInput); // Log the updated input

    // Move to the next word after replacement
    this.next();
  }

  replaceCWithS(): void {
    // Replace 'c' with 's' in the current word
    const updatedWord = this.currentWord.replace(/c/g, 's');

    // Update the entire input string with the modified word
    this.updatedInput = this.updatedInput.replace(this.currentWord, updatedWord);
    
    console.log('Updated word:', updatedWord); // For debugging purposes
    console.log('Updated input:', this.updatedInput); // Log the updated input

    // Move to the next word after replacement
    this.next();
  }

  replaceCWithK(): void {
    // Replace 'c' with 'k' in the current word
    const updatedWord = this.currentWord.replace(/c/g, 'k');

    // Update the entire input string with the modified word
    this.updatedInput = this.updatedInput.replace(this.currentWord, updatedWord);
    
    console.log('Updated word:', updatedWord); // For debugging purposes
    console.log('Updated input:', this.updatedInput); // Log the updated input

    // Move to the next word after replacement
    this.next();
  }

  finish(): void {
    // Call the processBaybayinText method with the user input
    const processedText = this.baybayinTextProcessorService.processBaybayinText(this.updatedInput);
    
    // Log or handle the processed text as needed
    console.log('Processed text:', processedText);
    
    // Close the dialog
    this.dialogRef.close(processedText);
  }
}