import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-proper-noun-dialog',
  standalone: true,
  imports: [FormsModule], // Add FormsModule here
  templateUrl: './proper-noun-dialog.component.html',
})
export class ProperNounDialogComponent {
  phoneticSpelling: string = '';

  constructor(
    public dialogRef: MatDialogRef<ProperNounDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNo(): void {
    this.dialogRef.close({ properNoun: false });
  }

  onYes(): void {
    this.dialogRef.close({ properNoun: true });
  }

  onPhoneticYes(): void {
    this.dialogRef.close({ spelledPhonetically: true });
  }

  onPhoneticNo(): void {
    this.dialogRef.close({ spelledPhonetically: false, phoneticSpelling: this.phoneticSpelling });
  }
}