// region Imports
import { Pipe, PipeTransform } from '@angular/core';
// Import lodash and makes it so that we use the _ to call its methods.
import * as _ from 'lodash';
// endregion

// region Decorator
@Pipe({
  name: 'divByBudget'
})
// endregion

export class DivByBudgetPipe implements PipeTransform {

  // region Methods
  transform(avgMealPrice: number, budget: number): string {
    // calculate
    const cost = Math.ceil(avgMealPrice / budget);
    return _.repeat('$', cost);
  }
  // endregion

}
