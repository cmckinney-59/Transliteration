import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RemoveDashService {

  constructor() { }

    // Method to replace both 'ng' and 'mga' in one go
    removeDash(input: string): string {
      return input.replace(/-/g, '');
  }
}
