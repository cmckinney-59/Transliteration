import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProperNounDialogComponent } from './proper-noun-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ProperNounHandlerService {
  constructor(private dialog: MatDialog) {}

  async processProperNoun(word: string): Promise<string> {
    // Only open dialog if the first letter is uppercase (i.e., a potential proper noun)
    if (word.charAt(0) === word.charAt(0).toUpperCase()) {
      const dialogRef = this.dialog.open(ProperNounDialogComponent, {
        data: { word },
      });

      const result = await dialogRef.afterClosed().toPromise();

      // Process the result if the word is a proper noun
      if (result?.properNoun) {
        if (!result.spelledPhonetically) {
          return result.phoneticSpelling; // Replace with the phonetic spelling provided by the user
        }
      }
    }

    // If word is not a proper noun or already phonetically correct, return the original word
    return word;
  }
}