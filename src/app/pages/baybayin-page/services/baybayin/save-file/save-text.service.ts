import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class SaveTextService {

  constructor() { }

  // Method to create and download a .txt file
  generateTextFile(processedText: string): void {
    const blob = new Blob([processedText], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'ProcessedText.txt');  // Save the text file with the name "ProcessedText.txt"
  }
}
