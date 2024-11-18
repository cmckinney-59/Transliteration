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
  words: string[] = [];
  currentWordIndex: number = 0;
  currentProperNounIndex: number = 0;
  currentCIndex: number = 0;
  currentChIndex: number = 0;
  currentJIndex: number = 0
  currentQuIndex: number = 0;
  updatedInput: string = '';

  constructor(
    public dialogRef: MatDialogRef<WordReviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { userInput: string },
    private baybayinTextProcessorService: BaybayinTextProcessorService
  ) {
    this.words = this.data.userInput.split(' ');  // Split input into words
    this.updatedInput = this.data.userInput;
    this.processCurrentWord();  // Start processing the first word
  }


  // Method to process the current word
  processCurrentWord(): void {
    if (this.currentWordIndex < this.words.length) {
      let currentWord = this.words[this.currentWordIndex];
      // Find the index of the first capital letter in the current word
      const capitalLetterMatch = currentWord.match(/[A-Z]/);
      this.currentProperNounIndex = capitalLetterMatch ? currentWord.indexOf(capitalLetterMatch[0]) : -1; // Finds the first occurrence of a capital letter
      this.currentCIndex = currentWord.indexOf('c');  // Find the first occurrence of 'c'
      this.currentChIndex = currentWord.indexOf('ch');  // Find the first occurrence of 'ch'
      this.currentJIndex = currentWord.indexOf('j');  // Find the first occurrence of 'j'
      this.currentQuIndex = currentWord.indexOf('qu');  // Find the first occurrence of 'qu'

      // Check for proper noun
      if (this.currentProperNounIndex !== -1) {
        this.promptForProperNoun();  // Ask to spell word
      } 
      // Check for 'qu'
      if (this.currentQuIndex !== -1) {
        this.promptForQu();  // Ask for 'qu' replacement
      } 
      // Check for 'ch'
      else if (this.currentChIndex !== -1) {
        this.promptForCh();  // Ask for 'ch' replacement
      } 
      // Check for 'j'
      else if (this.currentJIndex !== -1) {
        this.promptForJ();  // Ask for 'j' replacement
      } 
      // Check for 'c' (that is not part of 'ch')
      else if (this.currentCIndex !== -1 && this.currentChIndex === -1) {
        this.promptForC();  // Ask for 'c' replacement
      } 
      // No 'qu', 'ch', 'j', or 'c', move to next word
      else {
        this.nextWord();  // Move to the next word if no matches
      }
    } else {
      this.finish();  // Finish when all words are processed
    }
  }

  // Replace 'c' (but not 'ch') with 's'
  replaceCWithS(): void {
    this.words[this.currentWordIndex] = this.words[this.currentWordIndex].replace(/c(?!h)/, 's');
    this.updateInput();
    this.processCurrentWord();  // Process again in case there are more 'c' occurrences
  }

  // Replace 'c' (but not 'ch') with 'k'
  replaceCWithK(): void {
    this.words[this.currentWordIndex] = this.words[this.currentWordIndex].replace(/c(?!h)/, 'k');
    this.updateInput();
    this.processCurrentWord();  // Process again in case there are more 'c' occurrences
  }

  // Replace 'ch' with 'tiy'
  replaceCWithTiy(): void {
      this.words[this.currentWordIndex] = this.words[this.currentWordIndex].replace('c', 'tiy');
      this.updateInput();
      this.processCurrentWord();  // Process again in case there are more 'cc' occurrences
  }

  // Replace 'ch' with 'tiy'
  replaceChWithTiy(): void {
    this.words[this.currentWordIndex] = this.words[this.currentWordIndex].replace('ch', 'tiy');
    this.updateInput();
    this.processCurrentWord();  // Process again in case there are more 'ch' occurrences
  }

  // Replace 'ch' with 'k'
  replaceChWithK(): void {
    this.words[this.currentWordIndex] = this.words[this.currentWordIndex].replace('ch', 'k');
    this.updateInput();
    this.processCurrentWord();  // Process again in case there are more 'ch' occurrences
  }

  // Replace 'j' with 'diy'
  replaceJWithDiy(): void {
    this.words[this.currentWordIndex] = this.words[this.currentWordIndex].replace('j', 'diy');
    this.updateInput();
    this.processCurrentWord();  // Process again in case there are more 'j' occurrences
  }
  
  // Replace 'ch' with 'k'
  replaceJWithH(): void {
    this.words[this.currentWordIndex] = this.words[this.currentWordIndex].replace('j', 'h');
    this.updateInput();
    this.processCurrentWord();  // Process again in case there are more 'j' occurrences
  }

  // Replace 'qu' with 'kuw'
  replaceQuWithKuw(): void {
    this.words[this.currentWordIndex] = this.words[this.currentWordIndex].replace('qu', 'kuw');
    this.updateInput();
    this.processCurrentWord();  // Process again in case there are more 'qu' occurrences
  }
    
  // Replace 'qu' with 'k'
  replaceQuWithK(): void {
    this.words[this.currentWordIndex] = this.words[this.currentWordIndex].replace('qu', 'k');
    this.updateInput();
    this.processCurrentWord();  // Process again in case there are more 'qu' occurrences
  }

  // Move to the next word in the input
  nextWord(): void {
    this.currentWordIndex++;
    this.processCurrentWord();  // Process the next word
  }

  // Update the entire input string after modifying a word
  updateInput(): void {
    this.updatedInput = this.words.join(' ');
    console.log('Updated input:', this.updatedInput);
  }

  // Finish processing and close the dialog
  finish(): void {
    const processedText = this.baybayinTextProcessorService.processBaybayinText(this.updatedInput);
    console.log('Processed text:', processedText);
    this.dialogRef.close(processedText);  // Return the final processed text
  }

  promptForProperNoun(): void {
    console.log(`Is '${this.words[this.currentWordIndex]}' a proper noun?`);
    // Show dialog to get user input
  }

  promptForC(): void {
    console.log(`Does the 'c' in '${this.words[this.currentWordIndex]}' sound like 's', 'k' or 'ch'?`);
    // Show dialog to get user input
  }

  // Prompt methods (you need to implement the actual dialog for these)
  promptForCh(): void {
    console.log(`Does the 'ch' in '${this.words[this.currentWordIndex]}' sound like 'tiy' or 'k'?`);
    // Show dialog to get user input
  }

  promptForJ(): void {
    console.log(`Does the 'j' in '${this.words[this.currentWordIndex]}' sound like 'diy' or 'h'?`);
    // Show dialog to get user input
  }

  promptForQu(): void {
    console.log(`Does the 'qu' in '${this.words[this.currentWordIndex]}' sound like 'kuw' or 'k'?`);
    // Show dialog to get user input
  }
}
