import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-j-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './j-dialog.component.html',
})
export class JDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<JDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSelection(option: string): void {
    this.dialogRef.close(option); // Close the dialog and return the selected option
  }
}