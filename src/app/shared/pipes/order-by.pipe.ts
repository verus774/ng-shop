import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(arr: any, prop: string, desc = true): any {
    if (!Array.isArray(arr) || !prop) {
      return arr;
    }

    const ascComparator = (a, b) => {
      if (a[prop] < b[prop]) {
        return -1;
      } else if (a[prop] > b[prop]) {
        return 1;
      }
      return 0;
    };

    const descComparator = (a, b) => {
      if (a[prop] > b[prop]) {
        return -1;
      } else if (a[prop] < b[prop]) {
        return 1;
      }
      return 0;
    };

    return arr.sort(desc ? descComparator : ascComparator);
  }

}
