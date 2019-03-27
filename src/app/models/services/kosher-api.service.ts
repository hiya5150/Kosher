import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Restaurant} from '../restaurant';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KosherApiService {
  baseUrl = 'https://kosher-api.herokuapp.com/api/';
    constructor(private http: HttpClient) {}
      getRestaurants(): Observable<any> {
        const url = this.baseUrl + 'restaurants';
        return this.http.get(url);
  }
}
