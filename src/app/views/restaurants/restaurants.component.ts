import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../models/restaurant';
import {RestaurantService} from '../../models/services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  rests: Restaurant[];
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.restaurantService.getRestaurants()
      .subscribe(restaurants => this.rests = restaurants);
  }

}
