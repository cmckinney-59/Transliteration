import { Injectable } from '@angular/core';

import { SaveWordService } from './file-types/save-word.service';
import { SaveTextService } from './file-types/save-text.service';
import { SaveExcelService } from './file-types/save-excel.service';

@Injectable({
  providedIn: 'root'
})
export class SaveFileService {

  constructor(
    private saveWordService: SaveWordService,
    private saveTextService: SaveTextService,
    private saveExcelService: SaveExcelService
  ) { }

  // Call the service to generate the Word document
  generateWordDocument(processedText: string): void {
    this.saveWordService.generateWordDocument(processedText);
  }
  
    // Call the service to generate and download the .txt file
  generateTextFile(processedText: string): void {
    this.saveTextService.generateTextFile(processedText);
  }
  
    // Call the service to generate and download the Excel file
  generateExcelFile(processedText: string): void {
    this.saveExcelService.generateExcelFile(processedText);
  }
}
