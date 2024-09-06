import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CapitalizeFirstVowelService {

  constructor() { }
    // Capitalizes a vowel if it is the first letter of a word or after punctuation
    capitalizeVowel(input: string): string {
      return input.replace(/([.!?])\s*([aeiou])|(^|\s)([aeiou])/gi, (match, p1, p2, p3, p4) => {
        // Capitalize the vowel if it follows punctuation or is at the start of the string
        return (p1 ? p1 : p3) + (p2 ? p2.toUpperCase() : p4 ? p4.toUpperCase() : '');
      });
    }
}
