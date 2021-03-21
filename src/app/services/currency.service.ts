import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { selectAllCurrenciesFullNames, selectAllCurrenciesShortNames } from '../store/currency/currency.selectors';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { CurrencyInterfaces } from '../interfaces/currency-interfaces';

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

  /*  fetchConvertCurrencies(params: any): Observable<CurrencyInterfaces> {
      return this.http.get<any>(`${environment.serverUrl}latest?amount=${params.amount}&from=${params.from}&to=${params.to}`);
    }*/


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
  }): Observable<{
    amount: number,
    base: string,
    end_date: string
    start_date: string
    rates: { [key: string]: { [key: string]: number }},
  }> {

    const formattedStartDate = moment(params.start).format('yyyy-MM-DD');
    const formattedEndDate = moment(params.end).format('yyyy-MM-DD');

    return this.http.get<{
      amount: number,
      base: string,
      end_date: string
      start_date: string
      rates: { [key: string]: { [key: string]: number }},
    }>(`${environment.serverUrl}${formattedStartDate}..${formattedEndDate}`);
  }


  /*  getLatestCurrency(): Observable<any> {
      return this.http.get<any>(`${environment.serverUrl}latest`)
        .pipe(
          catchError(error => {
            console.log('Error: ', error.message);
            return throwError(error);
          }),
        );
    }*/

  /*  getCurrency(): void {
    return this.http.get('https://api.frankfurter.app/latest').subscribe(console.log);
  }*/
}
