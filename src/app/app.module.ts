import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { RestCardComponent } from './views/rest-card/rest-card.component';
import { RestaurantsComponent } from './views/restaurants/restaurants.component';
import { DivByBudgetPipe } from './controllers/div-by-budget.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RestCardComponent,
    RestaurantsComponent,
    DivByBudgetPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
