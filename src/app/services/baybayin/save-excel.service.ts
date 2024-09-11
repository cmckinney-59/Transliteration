import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class SaveExcelService {

  constructor() { }

    // Method to create and download an Excel file
    generateExcelFile(processedText: string): void {
      // Create a new workbook and a worksheet
      const workbook = XLSX.utils.book_new();
      const worksheetData = [['Processed Text'], [processedText]];  // Example data: a header and the processed text
  
      // Create the worksheet with the data
      const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
      
      // Add the worksheet to the workbook
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Processed Data');
  
      // Generate the Excel file (a binary string)
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  
      // Convert the binary string to a Blob and trigger the download
      const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      saveAs(blob, 'ProcessedText.xlsx');
    }
}
