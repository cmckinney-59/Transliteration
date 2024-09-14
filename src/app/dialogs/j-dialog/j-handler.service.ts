import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JDialogComponent } from './j-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class JHandlerService {
  constructor(private dialog: MatDialog) {}

  async processJInWord(word: string): Promise<string> {
    if (word.toLowerCase().includes('j')) {
      const dialogRef = this.dialog.open(JDialogComponent, {
        data: { word }
      });

      // Wait for user selection (either 'tiy' or 'k')
      const result = await dialogRef.afterClosed().toPromise();

      // Replace "j" with the selected option
      if (result) {
        return word.replace(/j/gi, result);
      }
    }
    return word;
  }
}