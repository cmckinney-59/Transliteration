import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SaveWordService } from '../../services/baybayin/save-file/save-word.service';
import { SaveTextService } from '../../services/baybayin/save-file/save-text.service';
import { SaveExcelService } from '../../services/baybayin/save-file/save-excel.service';
import { BaybayinTextProcessorService } from '../../services/baybayin/replacement-logic/baybayin-text-processor.service';

import { ChHandlerService } from '../../dialogs/ch-dialog/ch-handler.service';
import { CHandlerService } from '../../dialogs/c-dialog/c-handler.service';

@Component({
  selector: 'app-baybayin-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './baybayin-page.component.html',
  styleUrl: './baybayin-page.component.scss'
})
export class BaybayinPageComponent {
  // Variable to store user input
  userInput: string = '';
  processedText: string = '';
  processedWordsMap: Map<string, string> = new Map(); // Map to store processed words

  constructor(
    private baybayinTextProcessorService: BaybayinTextProcessorService,
    private saveWordService: SaveWordService,
    private saveTextService: SaveTextService,
    private saveExcelService: SaveExcelService,
    private chHandlerService: ChHandlerService,
    private cHandlerService: CHandlerService
  ) {}

  // Method to handle the input and processing of "ch"
  async getCombinedOutput(): Promise<void> {
    const words = this.userInput.split(/\s+/); // Split input into words by spaces

    const processedWords: string[] = [];
    
    for (let word of words) {
      // Check if the word is already processed
      if (this.processedWordsMap.has(word)) {
        // If already processed, use the stored processed version
        processedWords.push(this.processedWordsMap.get(word) as string);
      } else {
        // If not processed, process the word
        const processedWord = await this.processWordWithDialogs(word);
        const finalProcessedWord = this.baybayinTextProcessorService.processBaybayinText(processedWord);
        
        // Store the processed word in the map
        this.processedWordsMap.set(word, finalProcessedWord);
        
        processedWords.push(finalProcessedWord);
      }
    }

    // Join the processed words back into a single string
    this.processedText = processedWords.join(' ');
  }

  async processWordWithDialogs(word: string): Promise<string> {
    let processedWord = await this.chHandlerService.processChInWord(word);
    processedWord = await this.cHandlerService.processCInWord(processedWord);
    return processedWord;
  }

  // Method to copy the processed text to the clipboard
  copyToClipboard(): void {
    navigator.clipboard.writeText(this.processedText).then(() => {
      alert('Text copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }

  // Call the service to generate the Word document
  generateWordDocument(): void {
    this.saveWordService.generateWordDocument(this.processedText);
  }

  // Call the service to generate and download the .txt file
  generateTextFile(): void {
    this.saveTextService.generateTextFile(this.processedText);
  }

  // Call the service to generate and download the Excel file
  generateExcelFile(): void {
    this.saveExcelService.generateExcelFile(this.processedText);
  }

  async onWordFinished() {
    // Trigger processing when user finishes typing a word (triggered by blur or space key)
    await this.getCombinedOutput();
  }
}
