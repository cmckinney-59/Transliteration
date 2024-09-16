import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProperNounDialogComponent } from './proper-noun-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ProperNounHandlerService {

  constructor(private dialog: MatDialog) {}

  async processProperNoun(word: string): Promise<string> {
    const dialogRef = this.dialog.open(ProperNounDialogComponent, {
      data: { word },
    });

    const result = await dialogRef.afterClosed().toPromise();

    if (result.properNoun) {
      if (!result.spelledPhonetically) {
        return result.phoneticSpelling; // Replace with the phonetic spelling provided by the user
      }
    }

    return word; // No changes if not a proper noun or already phonetically correct
  }
}