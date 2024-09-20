import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReplaceShWithSiyService {

  constructor() { }

    // Method to replace 'sh' with a capital 'siy'
    replaceShWithSiy(input: string): string {
      return input.replace(/sh/g, 'siy');
  }
}