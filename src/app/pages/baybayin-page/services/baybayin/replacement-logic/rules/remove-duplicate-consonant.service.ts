import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemoveDuplicateConsonantService {

  constructor() { }

  // Method to remove duplicate consecutive consonants
  removeDuplicateConsonants(input: string): string {
    // Regex pattern to match consecutive consonants
    const consonantRegex = /([bcdfghjklmnpqrstvwxyz])\1+/gi;
  
    // Replace consecutive consonants with a single occurrence
    return input.replace(consonantRegex, '$1');
  }
}