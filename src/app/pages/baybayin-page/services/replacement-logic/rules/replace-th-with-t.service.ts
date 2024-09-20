import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReplaceThWithTService {

  constructor() { }

    // Method to replace 'th' with a capital 't'
    replaceThWithT(input: string): string {
      return input.replace(/th/g, 't');
  }
}