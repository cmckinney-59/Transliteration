import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertToLowercaseService {

  constructor() { }

  // Method to convert input to lowercase
  convertToLowercase(input: string): string {
    return input.toLowerCase();
  }
}
