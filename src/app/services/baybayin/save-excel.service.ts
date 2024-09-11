import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class SaveExcelService {

  constructor() { }

  // Method to create and download an Excel file with font styles
  generateExcelFile(processedText: string): void {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Processed Data');

    // Set a row with font styling
    worksheet.addRow(['Processed Text']);
    const row = worksheet.addRow([processedText]);

    row.font = {
      name: 'Tagalog Doctrina 1593', // Set to the desired font, like Arial or Times New Roman
    };

    // Generate and download the Excel file
    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      saveAs(blob, 'ProcessedText.xlsx');
    });
  }
}
