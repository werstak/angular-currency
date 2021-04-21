import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as moment from 'moment';

import { ICurrency } from '../interfaces/i-currency';
import { IConvertCurrency } from '../interfaces/i-convert-currency';
import { IConvertParams } from '../interfaces/i-convert-params';


@Injectable({
  providedIn: 'root'
})

export class CurrencyService {
  constructor(
    private store: Store,
    private httpClient: HttpClient,
  ) {
  }

  fetchConvertCurrencies(params: IConvertParams): Observable<IConvertCurrency> {
    const httpParams = new HttpParams({
      fromObject: {
        amount: params.amount.toString(),
        from: params.from,
        to: params.to,
      }
    });
    return this.httpClient
      .get<IConvertCurrency>(`${environment.serverUrl}latest`, {params: httpParams});
  }

  fetchCurrencies(): Observable<{ [key: string]: string }> {
    return this.httpClient.get<{ [key: string]: string }>(`${environment.serverUrl}currencies`);
  }

  getCurrency(params: {
    start: Date,
    end: Date,
  }): Observable<ICurrency> {
    const formattedStartDate = moment(params.start).format('yyyy-MM-DD');
    const formattedEndDate = moment(params.end).format('yyyy-MM-DD');
    return this.httpClient.get<ICurrency>(`${environment.serverUrl}${formattedStartDate}..${formattedEndDate}`);
  }

}
