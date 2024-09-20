import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuDialogComponent } from './qu-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class QuHandlerService {
  constructor(private dialog: MatDialog) {}

  async processQuInWord(word: string, currentIndex: number, totalWords: number): Promise<string> {
    if (word.toLowerCase().includes('qu')) {
      const dialogRef = this.dialog.open(QuDialogComponent, {
        data: { word, currentIndex, totalWords }
      });

      // Wait for user selection (either 'kuw' or 'k')
      const result = await dialogRef.afterClosed().toPromise();

      // Replace "qu" with the selected option
      if (result) {
        return word.replace(/qu/gi, result);
      }
    }
    return word;
  }
}