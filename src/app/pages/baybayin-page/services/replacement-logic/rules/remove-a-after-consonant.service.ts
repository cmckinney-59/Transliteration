import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemoveAAfterConsonantService {

  constructor() { }

  removeAAfterConsonant(input: string): string {
    return input.replace(/([BbCcDdFfGgHhJjKkLlMmNnPpQqRrSsTtVvWwXxYyZz])a/g, '$1');
  }
}
