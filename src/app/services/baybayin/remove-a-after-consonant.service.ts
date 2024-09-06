import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemoveAAfterConsonantService {

  constructor() { }

  removeAAfterConsonant(input: string): string {
    return input.replace(/([bcdfghjklmnpqrstvwxyz])a/g, '$1');
  }
}
