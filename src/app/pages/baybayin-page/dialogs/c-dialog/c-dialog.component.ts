import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-c-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './c-dialog.component.html',
})
export class CDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSelection(option: string): void {
    this.dialogRef.close(option); // Close the dialog and return the selected option
  }
}
