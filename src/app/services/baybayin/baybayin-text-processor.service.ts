import { Injectable } from '@angular/core';
import { ConvertNgAndMgaService } from './convert-ng-and-mga.service';
import { AddPlusAfterConsonantService } from './add-plus-after-consonant.service';
import { RemoveAAfterConsonantService } from '../../services/baybayin/remove-a-after-consonant.service';
import { CapitalizeFirstVowelService } from './capitalize-first-vowel.service';
import { RemoveDashService } from './remove-dash.service';

@Injectable({
  providedIn: 'root'
})
export class BaybayinTextProcessorService {

  constructor(
    private convertNgAndMgaService: ConvertNgAndMgaService,
    private addPlusAfterConsonantService: AddPlusAfterConsonantService,
    private removeAAfterConsonantService: RemoveAAfterConsonantService,
    private capitalizeFirstVowelService: CapitalizeFirstVowelService,
    private removeDashService: RemoveDashService
  ) { }

  processBaybayinText(input: string): string {
    let result = this.convertNgAndMgaService.replaceNgAndMga(input);
    result = this.addPlusAfterConsonantService.addPlusIfConsonant(result);
    result = this.removeAAfterConsonantService.removeAAfterConsonant(result);
    result = this.capitalizeFirstVowelService.capitalizeVowel(result);
    result = this.removeDashService.removeDash(result);
    return result;
  }
}
