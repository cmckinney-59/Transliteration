import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertNgAndMgaService {

  constructor() { }

  // Method to replace both 'ng' and 'mga' in one go
  replaceNgAndMga(input: string): string {
      return input.replace(/ ng /g, ' nN ').replace(/ mga /g, ' mNa ');
  }
}
