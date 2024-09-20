import { NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-proper-noun-dialog',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './proper-noun-dialog.component.html',
})
export class ProperNounDialogComponent {
  phoneticSpelling: string = '';
  isProperNoun: boolean | null = null; // Whether the word is a proper noun
  spelledPhonetically: boolean | null = null; // Whether the word is spelled phonetically
  showPhoneticQuestion: boolean = false; // Toggle to show phonetic question after answering proper noun question
  isComplete: boolean = false; // Toggle to show when dialog process is complete

  constructor(
    public dialogRef: MatDialogRef<ProperNounDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  // Called when the user answers the proper noun question
  onProperNounYes(): void {
    this.isProperNoun = true;
    this.showPhoneticQuestion = true; // Show the next question (phonetic question)
  }

  onProperNounNo(): void {
    this.dialogRef.close({ properNoun: false }); // Close immediately if not a proper noun
  }

  // Called when the user answers the phonetic question
  onPhoneticYes(): void {
    this.dialogRef.close({ properNoun: true, spelledPhonetically: true }); // Close dialog if phonetically correct
  }

  onPhoneticNo(): void {
    this.isComplete = true; // Ask for phonetic spelling
  }

  // Called when the user provides the phonetic spelling
  onSavePhoneticSpelling(): void {
    this.dialogRef.close({ properNoun: true, spelledPhonetically: false, phoneticSpelling: this.phoneticSpelling }); // Close with the phonetic spelling
  }

  // Called when the user cancels the dialog
  onCancel(): void {
    this.dialogRef.close(null); // Close dialog without any changes
  }
}