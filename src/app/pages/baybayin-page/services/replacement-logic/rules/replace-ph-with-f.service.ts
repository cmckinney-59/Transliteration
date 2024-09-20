import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReplacePhWithFService {

  constructor() { }

  // Method to replace 'ph' with a capital 'f'
  replacepPhWithF(input: string): string {
    return input.replace(/ph/g, 'f');
  }
}
