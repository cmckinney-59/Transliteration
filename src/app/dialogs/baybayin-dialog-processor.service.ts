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

  async processBaybayinDialog(word: string): Promise<string> {
    let processedWord = await this.properNounHandlerService.processProperNoun(word);
    processedWord = await this.chHandlerService.processChInWord(processedWord);
    processedWord = await this.cHandlerService.processCInWord(processedWord);
    processedWord = await this.jHanlderService.processJInWord(processedWord);
    processedWord = await this.quHandlerService.processQuInWord(processedWord);
    return processedWord;
  }
}
