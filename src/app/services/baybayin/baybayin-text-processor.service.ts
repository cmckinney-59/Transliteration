import { Injectable } from '@angular/core';

import { ConvertToLowercaseService } from './convert-to-lowercase.service';
import { ConvertNgAndMgaService } from './convert-ng-and-mga.service';
import { ReplaceNgWithCapitalNService } from './replace-ng-with-capital-n.service';
import { AddPlusAfterConsonantService } from './add-plus-after-consonant.service';
import { RemoveAAfterConsonantService } from '../../services/baybayin/remove-a-after-consonant.service';
import { CapitalizeFirstVowelService } from './capitalize-first-vowel.service';
import { RemoveDashService } from './remove-dash.service';
import { ReplaceCWithKService } from './replace-c-with-k.service';

@Injectable({
  providedIn: 'root'
})
export class BaybayinTextProcessorService {

  constructor(
    private convertToLowercaseService: ConvertToLowercaseService,
    private convertNgAndMgaService: ConvertNgAndMgaService,
    private replaceNgWithCapitalNService: ReplaceNgWithCapitalNService,
    private addPlusAfterConsonantService: AddPlusAfterConsonantService,
    private removeAAfterConsonantService: RemoveAAfterConsonantService,
    private capitalizeFirstVowelService: CapitalizeFirstVowelService,
    private removeDashService: RemoveDashService,
    private replaceCWithKService: ReplaceCWithKService
  ) { }

  processBaybayinText(input: string): string {
    let result = this.convertToLowercaseService.convertToLowercase(input);
    result = this.convertNgAndMgaService.replaceNgAndMga(result);
    result = this.replaceNgWithCapitalNService.replaceNgWithCapitalN(result);
    result = this.addPlusAfterConsonantService.addPlusIfConsonant(result);
    result = this.removeAAfterConsonantService.removeAAfterConsonant(result);
    result = this.capitalizeFirstVowelService.capitalizeVowel(result);
    result = this.removeDashService.removeDash(result);
    result = this.replaceCWithKService.replaceCWithK(result);
    return result;
  }
}
