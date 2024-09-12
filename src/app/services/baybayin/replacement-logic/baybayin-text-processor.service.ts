import { Injectable } from '@angular/core';

import { ConvertToLowercaseService } from './rules/convert-to-lowercase.service';
import { ReplaceShWithSiyService } from './rules/replace-sh-with-siy.service';
import { ReplacePhWithFService } from './rules/replace-ph-with-f.service';
import { ConvertNgAndMgaService } from './rules/convert-ng-and-mga.service';
import { ReplaceNgWithCapitalNService } from './rules/replace-ng-with-capital-n.service';
import { AddPlusAfterConsonantService } from './rules/add-plus-after-consonant.service';
import { RemoveAAfterConsonantService } from './rules/remove-a-after-consonant.service';
import { CapitalizeFirstVowelService } from './rules/capitalize-first-vowel.service';
import { RemoveDashService } from './rules/remove-dash.service';
import { ReplaceCWithKService } from './rules/replace-c-with-k.service';

@Injectable({
  providedIn: 'root'
})
export class BaybayinTextProcessorService {

  constructor(
    private convertToLowercaseService: ConvertToLowercaseService,
    private replaceShWithSiyService: ReplaceShWithSiyService,
    private replacePhWithFService: ReplacePhWithFService,
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
    result = this.replaceShWithSiyService.replaceShWithSiy(result);
    result = this.replacePhWithFService.replacepPhWithF(result);
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
