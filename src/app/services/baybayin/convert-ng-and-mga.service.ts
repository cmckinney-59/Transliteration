import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertNgAndMgaService {

  constructor() { }

  // Method to replace both 'ng' and 'mga' in one go
  replaceNgAndMga(input: string): string {
    let result = input.replace(/ ng /g, ' nN+ ');  // Replace 'ng' with 'naN'
    result = result.replace(/ mga /g, ' mN+ ');    // Then replace 'mga' with 'maN'
    return result;
  }
}
