import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReplaceNgWithCapitalNService {

  constructor() { }

    // Method to replace 'ng' with a capital 'N'
    replaceNgWithCapitalN(input: string): string {
      return input.replace(/ng/g, 'N');
  }
}
