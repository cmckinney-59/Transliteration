import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-qu-dialog',
  standalone: true,
  imports: [ MatButtonModule,
    NgIf
   ],
  templateUrl: './qu-dialog.component.html',
})
export class QuDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<QuDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSelection(option: string): void {
    this.dialogRef.close(option); // Close the dialog and return the selected option
  }
}