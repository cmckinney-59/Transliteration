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

  constructor(
    public dialogRef: MatDialogRef<WordReviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private baybayinDialogProcessorService: BaybayinDialogProcessorService
  ) {
    this.words = data.words;
    this.processedWordsMap = data.processedWordsMap;
    this.totalWords = this.words.length;  // Calculate total words inside the component
  }

  async processCurrentWord(): Promise<void> {
    const currentWord = this.words[this.currentWordIndex];

    if (!this.processedWordsMap.has(currentWord)) {
      const processedWord = await this.baybayinDialogProcessorService.processBaybayinDialog(currentWord);
      this.processedWordsMap.set(currentWord, processedWord);
    }
  }

  async nextWord(): Promise<void> {
    if (this.currentWordIndex < this.totalWords - 1) {
      await this.processCurrentWord();
      this.currentWordIndex++;
    } else {
      this.finishReview();
    }
  }

  async previousWord(): Promise<void> {
    if (this.currentWordIndex > 0) {
      this.currentWordIndex--;
    }
  }

  finishReview(): void {
    this.dialogRef.close(this.processedWordsMap); // Close dialog after all words are reviewed
  }
}
