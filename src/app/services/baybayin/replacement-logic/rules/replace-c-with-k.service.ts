import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReplaceCWithKService {

  constructor() { }

    // Method to replace 'c' with a 'k'
    replaceCWithK(input: string): string {
      return input.replace(/c/g, 'k');
  }
}
