import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../models/restaurant';

@Component({
  selector: 'app-rest-card',
  templateUrl: './rest-card.component.html',
  styleUrls: ['./rest-card.component.scss']
})
export class RestCardComponent implements OnInit {
  @Input() restaurant: Restaurant;
  @Input() userBudget: number;
  constructor() {}

  ngOnInit() {}

}
