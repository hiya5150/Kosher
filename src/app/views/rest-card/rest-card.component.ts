import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../models/restaurant';

@Component({
  selector: 'app-rest-card',
  templateUrl: './rest-card.component.html',
  styleUrls: ['./rest-card.component.scss']
})
export class RestCardComponent implements OnInit {
  // region Variables
  // The @Input() makes it so that these accept as tag attributes.
  @Input() restaurant: Restaurant;
  @Input() userBudget: number;
  // endregion

  // region Default Methods
  constructor() {}
  ngOnInit() {}
  // endregion
}
