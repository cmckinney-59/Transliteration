import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule, NgIf } from '@angular/common';

import { BaybayinDialogProcessorService } from '../baybayin-dialog-processor.service';

@Component({
  selector: 'app-word-review-dialog',
  standalone: true,
  templateUrl: './word-review-dialog.component.html',
  providers: [
    BaybayinDialogProcessorService,
  ],
  imports: [
    NgIf,
    CommonModule
  ],
})
export class WordReviewDialogComponent {
  currentWordIndex: number = 0;
  words: string[];
  processedWordsMap: Map<string, string>;
  totalWords: number;
  chWordsIndices: number[];

  constructor(
    public dialogRef: MatDialogRef<WordReviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private baybayinDialogProcessorService: BaybayinDialogProcessorService
  ) {
    // Original words in the sentence
    this.words = data.words.split(' ');
    // Filter words to include only those that have 'ch'
    this.words = data.words.filter((word: string) => word.includes('ch'));
    this.processedWordsMap = data.processedWordsMap;
    this.totalWords = this.words.length; // Calculate total words inside the component
  }

  onSelection(replacement: string): void {
    const currentWord = this.words[this.currentWordIndex];
    const processedWord = currentWord.replace(/ch/g, replacement);
    this.processedWordsMap.set(currentWord, processedWord);
    this.nextWord();
  }

  async nextWord(): Promise<void> {
    if (this.currentWordIndex < this.totalWords - 1) {
      this.currentWordIndex++;
    } else {
      this.finishReview();
    }
  }

  finishReview(): void {
    this.dialogRef.close(this.processedWordsMap); // Close dialog after all words are reviewed
  }
}
