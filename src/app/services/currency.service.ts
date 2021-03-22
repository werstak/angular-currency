import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { Store } from '@ngrx/store';
import { CurrencyInterfaces } from '../interfaces/currency-interfaces';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {

  constructor(
    private store: Store,
    private http: HttpClient,
  ) {
  }

  fetchCurrencies(): Observable<{ [key: string]: string }> {
    return this.http.get<{ [key: string]: string }>(`${environment.serverUrl}currencies`);
  }

  fetchConvertCurrencies(params: any): Observable<CurrencyInterfaces> {
    return this.http.get<any>(`${environment.serverUrl}latest?amount=${params.amount}&from=${params.from}&to=${params.to}`)
      .pipe(
        catchError(error => {
          console.log('Error: ', error.message);
          return throwError(error);
        }),
      );
  }


  getCurrency(params: {
    start: Date,
    end: Date,
  }): Observable<CurrencyInterfaces> {
    const formattedStartDate = moment(params.start).format('yyyy-MM-DD');
    const formattedEndDate = moment(params.end).format('yyyy-MM-DD');
    return this.http.get<CurrencyInterfaces>(`${environment.serverUrl}${formattedStartDate}..${formattedEndDate}`);
  }

}
