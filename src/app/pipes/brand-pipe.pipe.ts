import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';

@Pipe({
  name: 'brandPipe'
})
export class BrandPipePipe implements PipeTransform {

  transform(value: Brand[], filterBrandText: string): Brand[] {
    filterBrandText=filterBrandText?filterBrandText.toLocaleLowerCase():""
    return filterBrandText?value.filter((b:Brand)=>b.brandName.toLocaleLowerCase().indexOf(filterBrandText)!==-1):value;
  }

}
