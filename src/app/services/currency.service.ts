import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { selectAllCurrencies, selectAllCurrenciesShortNames } from '../store/currency/currency.selectors';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  allCurrencies$ = this.store.select(selectAllCurrencies);
  allCurrenciesShortNames$ = this.store.select(selectAllCurrenciesShortNames);

  constructor(
    private store: Store,
    private http: HttpClient,
  ) {
  }

  /*  getCurrency(): void {
      return this.http.get('https://api.frankfurter.app/latest').subscribe(console.log);
    }*/

  fetchCurrencies(): Observable<{[key: string]: string}>{
    return this.http.get<{[key: string]: string}>(`${environment.serverUrl}currencies`);
  }

  getLatestCurrency(): Observable<any> {
    return this.http.get<any>(`${environment.serverUrl}latest`)
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

}
