import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddPlusAfterConsonantService {

  constructor() { }

  // Method to insert '+' between consecutive consonants and at the end if the word ends with a consonant
  addPlusIfConsonant(input: string): string {
    const consonantRegex = /[bcdfghjklmnpqrstvwxyz]/i;

    return input.split(' ').map(word => {
      let transformedWord = '';

      // Loop through each character of the word
      for (let i = 0; i < word.length; i++) {
        transformedWord += word[i]; // Add the current character

        // Check if the current character and the next one are both consonants
        if (i < word.length - 1 && consonantRegex.test(word[i]) && consonantRegex.test(word[i + 1])) {
          transformedWord += '+';
        }
      }

      // Add '+' at the end if the word ends with a consonant
      if (consonantRegex.test(word[word.length - 1])) {
        transformedWord += '+';
      }

      return transformedWord;
    }).join(' '); // Join the transformed words back into a sentence
  }
}
