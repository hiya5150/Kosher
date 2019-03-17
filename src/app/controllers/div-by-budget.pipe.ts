import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'divByBudget'
})
export class DivByBudgetPipe implements PipeTransform {

  transform(avgMealPrice: number, budget: number): string {
    const cost = Math.ceil(avgMealPrice / budget);
    return _.repeat('$', cost);
  }

}
