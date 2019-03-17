import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../models/restaurant';
import {RestaurantService} from '../../models/services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  // region Values
  rests: Restaurant[];
  columns: number;
  // endregion

  // region DefaultMethods
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.getRestaurants();
  }
  // endregion

  // region Service Getters
  getRestaurants(): void {
    this.restaurantService.getRestaurants()
      .subscribe(restaurants => {
        this.rests = restaurants;
        this.columns = this.rests.length / 3;
      });
  }
  // endregion

}
