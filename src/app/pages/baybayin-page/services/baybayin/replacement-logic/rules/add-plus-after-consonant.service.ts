import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddPlusAfterConsonantService {

  constructor() { }

  // Method to insert '+' between consecutive consonants and at the end if the word ends with a consonant
  addPlusIfConsonant(input: string): string {
    const consonantRegex = /[bcdfghjklmnpqrstvwxyz]/i;
    const punctuationRegex = /[.,!?;-]/;
  
    // Return an empty string if input is empty or contains only spaces
    if (!input.trim()) {
      return '';
    }
  
    return input.split(' ').map(word => {
      if (!word.trim()) {
        return word; // If the word is empty or just spaces, return it as is
      }
  
      let transformedWord = '';
  
      // Loop through each character of the word
      for (let i = 0; i < word.length; i++) {
        transformedWord += word[i]; // Add the current character
  
        // Skip adding '+' if the current or next character is a space
        if (word[i] === ' ' || word[i + 1] === ' ') {
          continue;
        }
  
        // Check if the current character and the next one are both consonants
        if (i < word.length - 1 && consonantRegex.test(word[i]) && consonantRegex.test(word[i + 1])) {
          transformedWord += '+';
        }
  
        // Check if the current character is a consonant and the next one is punctuation
        if (i < word.length - 1 && consonantRegex.test(word[i]) && punctuationRegex.test(word[i + 1])) {
          transformedWord += '+';
        }
      }
  
      // Add '+' at the end only if the last character is a consonant
      if (consonantRegex.test(word[word.length - 1])) {
        transformedWord += '+';
      }
  
      return transformedWord;
    }).join(' ').trim(); // Join words and trim any extra spaces at the end
  }  
}
