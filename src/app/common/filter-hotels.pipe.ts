import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterHotels'
})
export class FilterHotelsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
