import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(users: any[], key: string): any[] {
    if (!users || users.length === 0) return [];
    return users.sort((a, b) => a[key].localeCompare(b[key]));
  }
}