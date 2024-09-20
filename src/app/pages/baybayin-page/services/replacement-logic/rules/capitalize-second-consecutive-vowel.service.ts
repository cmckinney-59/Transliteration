import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CapitalizeSecondConsecutiveVowelService {

  constructor() { }

  // Method to capitalize subsequent vowels in consecutive sequences
  capitalizeSubsequentVowels(input: string): string {
    // Regex pattern to find sequences of consecutive vowels
    const vowelRegex = /([aeiou])([aeiou]+)/gi;

    // Replace every vowel sequence by capitalizing subsequent vowels after the first one
    return input.replace(vowelRegex, (match, firstVowel, subsequentVowels) => {
      return firstVowel + subsequentVowels.toUpperCase();
    });
  }
}
