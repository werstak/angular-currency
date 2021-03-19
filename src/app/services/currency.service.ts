import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { selectAllCurrenciesFullNames, selectAllCurrenciesShortNames } from '../store/currency/currency.selectors';
import { Store } from '@ngrx/store';
import { CurrencyInterfaces } from '../interfaces/currency-interfaces';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  allCurrenciesFullNames$ = this.store.select(selectAllCurrenciesFullNames);
  allCurrenciesShortNames$ = this.store.select(selectAllCurrenciesShortNames);

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
  }): Observable<any> {
    return this.http.get<any>(`${environment.serverUrl}${params.start}..${params.end}`)
      .pipe(
        catchError(error => {
          console.log('Error: ', error.message);
          return throwError(error);
        }),
      );
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
