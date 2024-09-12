import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReplaceCWithKService {

  constructor() { }

    // Method to replace 'c' with a capital 'k'
    replaceCWithK(input: string): string {
      return input.replace(/c/g, 'k').replace(/C/g, 'K');
  }
}
