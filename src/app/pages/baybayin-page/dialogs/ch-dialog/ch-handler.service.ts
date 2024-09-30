import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ChDialogComponent } from './ch-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ChHandlerService {
  constructor(private dialog: MatDialog) {}

  async processChInWord(word: string): Promise<string> {
    if (word.toLowerCase().includes('ch')) {
      const dialogRef = this.dialog.open(ChDialogComponent, {
        data: { word }
      });

      // Wait for user selection (either 'tiy' or 'k')
      const result = await dialogRef.afterClosed().toPromise();

      // Replace "ch" with the selected option
      if (result) {
        return word.replace(/ch/gi, result);
      }
    }
    return word;
  }
}