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

    // Sheet 1: Add the processed text
    const worksheet1 = workbook.addWorksheet('Processed Data');
    worksheet1.addRow(['Processed Text']);
    const row = worksheet1.addRow([processedText]);

    // Set font for the row in "Processed Data" sheet
    row.font = {
      name: 'Tagalog Doctrina 1593', // Set to the desired font, like Arial or Times New Roman
    };

    // Extract unique words from the processed text
    const uniqueWords = this.extractUniqueWords(processedText);

    // Sheet 2: Add a new sheet with unique words in different cells in a column
    const worksheet2 = workbook.addWorksheet('Unique Words');
    worksheet2.addRow(['Unique Words']); // Add a header for the column

    // Add each unique word to a new row and apply font style
    uniqueWords.forEach(word => {
      const wordRow = worksheet2.addRow([word]);
      wordRow.font = {
        name: 'Tagalog Doctrina 1593', // Apply the same font to the unique words sheet
      };
    });

    // Generate and download the Excel file
    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      saveAs(blob, 'ProcessedText.xlsx');
    });
  }

  // Helper method to extract unique words from the processed text
  private extractUniqueWords(text: string): string[] {
    // Split the text by spaces, keeping alphanumeric characters and special characters like '+'
    const words = text.match(/[^\s]+/g) || [];

    // Filter for unique words while preserving the case and special characters
    const uniqueWords = Array.from(new Set(words));

    // Sort the unique words alphabetically
    uniqueWords.sort((a, b) => a.localeCompare(b));

    return uniqueWords;
  }
}
