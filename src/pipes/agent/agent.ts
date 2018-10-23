import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the AgentPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'agent',
})
export class AgentPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
    transform(data: any, searchText: any) {
        if (data == undefined) return data;
        if (searchText == null) return data;

        return data.filter(function (item) {
            return (item.first_name.toLowerCase().indexOf(searchText.toLowerCase()) > -1) || (item.last_name.toLowerCase().indexOf(searchText.toLowerCase()) > -1) || (item.mobile_number.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
        });
    }
}
