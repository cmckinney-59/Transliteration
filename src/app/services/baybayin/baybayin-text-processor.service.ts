import { Injectable } from '@angular/core';
import { ConvertNgAndMgaService } from './convert-ng-and-mga.service';
import { AddPlusAfterConsonantService } from './add-plus-after-consonant.service';
import { RemoveAAfterConsonantService } from '../../services/baybayin/remove-a-after-consonant.service';
import { CapitalizeFirstVowelService } from './capitalize-first-vowel.service';

@Injectable({
  providedIn: 'root'
})
export class BaybayinTextProcessorService {

  constructor(
    private convertNgAndMgaService: ConvertNgAndMgaService,
    private addPlusAfterConsonantService: AddPlusAfterConsonantService,
    private removeAAfterConsonantService: RemoveAAfterConsonantService,
    private capitalizeFirstVowelService: CapitalizeFirstVowelService
  ) { }

  processBaybayinText(input: string): string {
    let result = this.convertNgAndMgaService.replaceNgAndMga(input);
    result = this.addPlusAfterConsonantService.addPlusIfConsonant(result);
    result = this.removeAAfterConsonantService.removeAAfterConsonant(result);
    result = this.capitalizeFirstVowelService.capitalizeVowel(result);
    return result;
  }
}
