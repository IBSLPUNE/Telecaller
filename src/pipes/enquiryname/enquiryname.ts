import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the EnquirynamePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'enquiryname',
})
export class EnquirynamePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(data: any, searchText: any) {
        if (data == undefined) return data;
        if (searchText == null) return data;

        return data.filter(function (item) {
            return (item.mobile_no.toLowerCase().indexOf(searchText.toLowerCase()) > -1) || (item.name_first.toLowerCase().indexOf(searchText.toLowerCase()) > -1) || (item.last_name.toLowerCase().indexOf(searchText.toLowerCase()) > -1) ;
        });
    }
}
