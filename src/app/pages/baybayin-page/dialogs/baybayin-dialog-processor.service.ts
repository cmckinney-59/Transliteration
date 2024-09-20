import { Injectable } from '@angular/core';

import { ChHandlerService } from './ch-dialog/ch-handler.service';
import { CHandlerService } from './c-dialog/c-handler.service';
import { JHandlerService } from './j-dialog/j-handler.service';
import { QuHandlerService } from './qu-dialog/qu-handler.service';
import { ProperNounHandlerService } from './proper-noun-dialog/proper-noun-handler.service';

@Injectable({
  providedIn: 'root'
})
export class BaybayinDialogProcessorService {

  constructor(
    private chHandlerService: ChHandlerService,
    private cHandlerService: CHandlerService,
    private jHanlderService: JHandlerService,
    private quHandlerService: QuHandlerService,
    private properNounHandlerService: ProperNounHandlerService
  ) { }

  async processBaybayinDialog(word: string, currentIndex: number, totalWords: number): Promise<string> {
    let processedWord = await this.properNounHandlerService.processProperNoun(word, currentIndex, totalWords);
    processedWord = await this.chHandlerService.processChInWord(processedWord, currentIndex, totalWords);
    processedWord = await this.cHandlerService.processCInWord(processedWord, currentIndex, totalWords);
    processedWord = await this.jHanlderService.processJInWord(processedWord, currentIndex, totalWords);
    processedWord = await this.quHandlerService.processQuInWord(processedWord, currentIndex, totalWords);
    return processedWord;
  }
}
