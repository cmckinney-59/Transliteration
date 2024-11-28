import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReplaceXWithKSService {

  constructor() { }

    // Method to replace 'x' with 'ks'
    replaceXWithKS(input: string): string {
      return input.replace(/x/g, 'ks');
  }
}