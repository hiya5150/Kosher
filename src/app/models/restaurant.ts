// region Imports
import {Address} from './address';
import {Review} from './review';
// endregion

export class Restaurant {
  // region Attributes
  name: string;
  website: string;
  phone: string;
  rating: number;
  avgMealPrice: number;
  reviews: Review[];
  location: Address;
  // endregion

  // region Default Methods
  constructor(args?) {
    this.name = args.name;
    this.website = args.website;
    this.phone = args.phone;
    this.rating = args.rating;
    this.avgMealPrice = args.avgMealPrice;
  }
  // endregion
}











