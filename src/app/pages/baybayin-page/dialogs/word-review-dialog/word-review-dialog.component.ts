import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BaybayinTextProcessorService } from '../../services/replacement-logic/baybayin-text-processor.service';

@Component({
  selector: 'app-word-review-dialog',
  standalone: true,
  templateUrl: './word-review-dialog.component.html',
  styleUrls: ['./word-review-dialog.component.scss']
})
export class WordReviewDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<WordReviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { userInput: string },
    private baybayinTextProcessorService: BaybayinTextProcessorService
  ) {}

  finish(): void {
    // Call the processBaybayinText method with the user input
    const processedText = this.baybayinTextProcessorService.processBaybayinText(this.data.userInput);
    
    // Log or handle the processed text as needed
    console.log('Processed text:', processedText);
    
    // Close the dialog
    this.dialogRef.close(processedText);
  }
}