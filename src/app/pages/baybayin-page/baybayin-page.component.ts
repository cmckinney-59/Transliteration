import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  // Method to return the user input with 'a' removed for output
  getFilteredOutput(): string {
    return this.userInput.replace(/a/g, '');  // Remove 'a' from the user input for display
  }
}
