import { NgFor } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-word-review-dialog',
  standalone: true,
  imports: [FormsModule, MatDialogModule, NgFor],
  templateUrl: './word-review-dialog.component.html',
  styleUrls: ['./word-review-dialog.component.scss']
})
export class WordReviewDialogComponent {
  currentWordIndex: number = 0;
  currentQuestionIndex: number = 0;
  questions: string[] = [];
  soundOptions: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<WordReviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.setupQuestionsForCurrentWord();
  }

  setupQuestionsForCurrentWord(): void {
    const word = this.data.words[this.currentWordIndex];
    this.questions = this.getQuestionsForWord(word);
    this.soundOptions = this.getSoundOptionsForQuestion(this.questions[this.currentQuestionIndex]);
  }

  getQuestionsForWord(word: string): string[] {
    const questions = [];

    if (word.includes('ch')) {
      questions.push(`Does the "ch" in "${word}" sound like "k" or "tiy"?`);
    }
    if (word.includes('c')) {
      questions.push(`Does the "c" in "${word}" sound like "k" or "s"?`);
    }
    if (word.includes('j')) {
      questions.push(`Does the "j" in "${word}" sound like "h" or "diy"?`);
    }
    if (word.includes('qu')) {
      questions.push(`Does the "qu" in "${word}" sound like "kuw" or "k"?`);
    }
    if (word[0] === word[0].toUpperCase()) {
      questions.push(`Is "${word}" a proper noun?`);
    }

    return questions;
  }

  getSoundOptionsForQuestion(question: string): string[] {
    if (question.includes('"ch"')) {
      return ['k', 'tiy'];
    } else if (question.includes('"c"')) {
      return ['k', 's'];
    } else if (question.includes('"j"')) {
      return ['h', 'diy'];
    } else if (question.includes('"qu"')) {
      return ['kuw', 'k'];
    } else if (question.includes('proper noun')) {
      return ['Yes', 'No'];
    }
    return [];
  }

  next(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.soundOptions = this.getSoundOptionsForQuestion(this.questions[this.currentQuestionIndex]);
    } else if (this.currentWordIndex < this.data.words.length - 1) {
      this.currentWordIndex++;
      this.currentQuestionIndex = 0;
      this.setupQuestionsForCurrentWord();
    } else {
      this.dialogRef.close();
    }
  }

  selectOption(option: string): void {
    const currentWord = this.data.words[this.currentWordIndex];

    // Replace "ch" with the user-selected option
    if (this.questions[this.currentQuestionIndex].includes('"ch"')) {
      this.data.words[this.currentWordIndex] = currentWord.replace(/ch/g, option);
    }
    // Add similar logic for other options if needed, e.g., "c", "j", "qu", etc.

    console.log(`Selected option: ${option}`);

    // Move to the next question or word
    this.next();
  }

  close(): void {
    this.dialogRef.close();
  }
}
