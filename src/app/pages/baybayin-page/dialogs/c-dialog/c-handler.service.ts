import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CDialogComponent } from './c-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class CHandlerService {
  constructor(private dialog: MatDialog) {}

  async processCInWord(word: string): Promise<string> {
    if (word.toLowerCase().includes('c')) {
      const dialogRef = this.dialog.open(CDialogComponent, {
        data: { word }
      });

      // Wait for user selection (either 'tiy' or 'k')
      const result = await dialogRef.afterClosed().toPromise();

      // Replace "c" with the selected option
      if (result) {
        return word.replace(/c/gi, result);
      }
    }
    return word;
  }
}
