import { Injectable } from '@angular/core';
import Pizzip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { saveAs } from 'file-saver';
import * as JSZipUtils from 'jszip-utils';

@Injectable({
  providedIn: 'root'
})
export class SaveWordService {

  constructor() { }

  // Load the DOCX template
  loadFile(url: string, callback: (error: any, content: any) => void) {
    JSZipUtils.getBinaryContent(url, callback);
  }

  // Method to create and download a Word document
  generateWordDocument(processedText: string): void {
    this.loadFile('assets/templates/baybayin/BaybayinTemplate.docx', (error, content) => {
      if (error) {
        throw error;
      }

      const zip = new Pizzip(content);
      const doc = new Docxtemplater().loadZip(zip);
      doc.setOptions({ delimiters: { start: '{{', end: '}}' } });

      // Set the processedText to the placeholder in the Word template
      doc.setData({
        processedText: processedText
      });

      try {
        // Render the document
        doc.render();
      } catch (error) {
        console.error('Error rendering the document', error);
      }

      // Generate the document as a blob
      const out = doc.getZip().generate({
        type: 'blob',
        mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      });

      // Save the document to the user's device
      saveAs(out, 'ProcessedText.docx');
    });
  }
}
