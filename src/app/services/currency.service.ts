import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

import { Store } from '@ngrx/store';
import { CurrencyInterfaces } from '../interfaces/currency-interfaces';
import * as moment from 'moment';
import { ConvertCurrencyInterfaces } from '../interfaces/convert-currency-interfaces';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {

  constructor(
    private store: Store,
    private httpClient: HttpClient,
  ) {
  }

  fetchConvertCurrencies(params: { amount: number, from: string, to: string }): Observable<ConvertCurrencyInterfaces> {
    const httpParams = new HttpParams({
      fromObject: {
        amount: params.amount.toString(),
        from: params.from,
        to: params.to,
      }
    });

    return this.httpClient
      .get<ConvertCurrencyInterfaces>(`${environment.serverUrl}latest`, {params: httpParams});
  }

  fetchCurrencies(): Observable<{ [key: string]: string }> {
    return this.httpClient.get<{ [key: string]: string }>(`${environment.serverUrl}currencies`);
  }

  getCurrency(params: {
    start: Date,
    end: Date,
  }): Observable<CurrencyInterfaces> {
    const formattedStartDate = moment(params.start).format('yyyy-MM-DD');
    const formattedEndDate = moment(params.end).format('yyyy-MM-DD');
    return this.httpClient.get<CurrencyInterfaces>(`${environment.serverUrl}${formattedStartDate}..${formattedEndDate}`);
  }

}
