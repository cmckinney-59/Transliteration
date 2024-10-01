//------ Import Section  ------//

// All of the angular imports
// Imports component decorator from core used for all basic functions of components. Component type script files define how components behave.
import { Component } from '@angular/core';
// Imports FormsModule and MatDialog from forms which houses tools to create forms components
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

// All of the custom imports (files I made)
// Imports the SaveFileService which houses tools to save transliterated text into either a word document, text file or excel file
import { SaveFileService } from './services/save-file/baybayin-save-file.service';
// Imports the BaybayinTextProcessorService which provides tools to run user inputs through a series of rules that transliterate the text
import { BaybayinTextProcessorService } from './services/replacement-logic/baybayin-text-processor.service';
// Imports the BaybayinDialogProcessorService which provides a dialog tool which asks the user if proper nouns or certain characters need to be replaced in order to become phonetically written
import { BaybayinDialogProcessorService } from './dialogs/baybayin-dialog-processor.service';
// Imports the BaybayinDesctiptionComponent which houses a brief explanation and history of Baybayin 
import { BaybayinDescriptionComponent } from './description/baybayin-description.component';

//------ Decorator ------//

// This next section is an angular component decorator. It contains metadata for the component.
// The Component decorator tells angular what kind of file this is
@Component({
  // This allows this component to be referrenced in other templates by typing <app-baybayin-page></app-baybayin-page>
  selector: 'app-baybayin-page',
  // This makes this page standalone, meaning it does not need an app module to function and could function on it's own
  standalone: true,
  // This provides imports that would otherwise be declared in the app module. FormsModule: Allows for forms tools. BaybayinDescriptionComponent: Provides description of what and history of Baybayin
  imports: [FormsModule, BaybayinDescriptionComponent],
  // This creates a link from this componenet to the corresponding template or html file
  templateUrl: './baybayin-page.component.html',
  // This links the component to the corresponding style sheet
  styleUrls: ['./baybayin-page.component.scss']
})

//------ Class Declaration ------//

// This class houses  the logic for how the baybayin page behaves. 
// The following makes the class importable by applying 'export', defines the class, and gives the class name 'BaybayinPageComponent'
export class BaybayinPageComponent {

  //------ Variables ------//

  // Variables are 'buckets' for data to be housed during runtime
  // Declares the variables 'userInput' and 'processedText', sets the variable to type 'string' (characters), sets the variable to an empty string ''
  userInput: string = '';
  processedText: string = '';
  // Declares the variable 'processedWordsMap', sets the variable to type Map (a built in JS/TS object that stores key value pairs), sets the values to string and string '<string, string>' and instanciates a new empty 'Map' object with new Map()
  processedWordsMap: Map<string, string> = new Map();
  // Declares the variable 'allWords' and 'wordsToProcess', sets the variable to type string array, sets the variable to an empty array
  allWords: string[] = [];
  wordsToProcess: string[] = [];

  //------ Constructor ------//
  // The constructor initializes component and injects any service or  used in the logic of the BaybayinPageComponent
  // Special angular class called when a component is instanciated
  constructor(
    // Injects the private (only usable in this app) BaybayinProcessorService into the app. Any public methods and objects within the service can be called in the app by using the baybayinTextProcessorService prefix
    private baybayinTextProcessorService: BaybayinTextProcessorService,
    // Injects the private (only usable in this app) SaveFileService into the app. Any public methods and objects within the service can be called in the app by using the saveFileService prefix
    private saveFileService: SaveFileService,
    // Injects the private (only usable in this app) BaybayinDialogProcessorService into the app. Any public methods and objects within the service can be called in the app by using the baybainDialogProcessorService prefix
    private baybainDialogProcessorService: BaybayinDialogProcessorService,
    // Injects the private (only usable in this app) MatDialog class into the app. Any public methods and objects within the service can be called in the app by using the dialog prefix
    private dialog: MatDialog
  ) {}
//TODO: Figure this out
// Method that handles the submit button click and opens the review dialog
onSubmit(): void {}
 
  // Method to copy the processed text to the clipboard, takes no parameters '()', returns nothing 'void'
  copyToClipboard(): void {
    // A method that takes the processed text and writes it to the clip board
    navigator.clipboard.writeText(this.processedText).then(() => {
      // If the text copies successfully the following block of code displays
      alert('Text copied to clipboard!');
      // If there is an error when copying the following code fires
    }).catch(err => {
      // The following console error displays if the text fails to copy
      console.error('Failed to copy text: ', err);
    });
  }

  // Call the service to generate the Word document, takes no parameters '()', returns nothing 'void'
  generateWordDocument(): void {
    // instanciates the saveFileService and calls the generateWordDocument method which then insterts the processed text into a Word file that is downloaded
    this.saveFileService.generateWordDocument(this.processedText);
  }

  // Call the service to generate and download the .txt file, takes no parameters '()', returns nothing 'void'
  generateTextFile(): void {
    // instanciates the saveFileService and calls the generateTextFile method which then insterts the processed text into a text file that is downloaded
    this.saveFileService.generateTextFile(this.processedText);
  }

  // Call the service to generate and download the Excel file, takes no parameters '()', returns nothing 'void'
  generateExcelFile(): void {
    // instanciates the saveFileService and calls the generateExcelFile method which then insterts the processed text into a Excel file that is downloaded
    this.saveFileService.generateExcelFile(this.processedText);
  }

  // An async (can handle operations that take time to complete) method that waits for the transliteration process to complete then displays the output
  async onWordFinished() {
    // waits for the transliteration process to complete then displays the output
    await this.onSubmit();
  }
}
