import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as moment from 'moment';

import { CurrencyInterface } from '../interfaces/currency-Interface';
import { ConvertCurrencyInterface } from '../interfaces/convert-currency.interface';
import { ConvertParamsInterface } from '../interfaces/convert-params.interface';


@Injectable({
  providedIn: 'root'
})

export class CurrencyService {
  constructor(
    private store: Store,
    private httpClient: HttpClient,
  ) {
  }

  /** Getting the result of currency conversion */
  fetchConvertCurrencies(params: ConvertParamsInterface): Observable<ConvertCurrencyInterface> {
    const httpParams = new HttpParams({
      fromObject: {
        amount: params.amount.toString(),
        from: params.from,
        to: params.to,
      }
    });
    return this.httpClient
      .get<ConvertCurrencyInterface>(`latest`, {params: httpParams});
  }

  /** Getting a list of currencies */
  fetchListCurrencies(): Observable<{ [key: string]: string }> {
    return this.httpClient
      .get<{ [key: string]: string }>(`currencies`);
  }

  /** Getting the exchange rate for the selected period */
  fetchCourseCurrency(params: {
    start: Date,
    end: Date,
  }): Observable<CurrencyInterface> {
    const formattedStartDate = moment(params.start).format('yyyy-MM-DD');
    const formattedEndDate = moment(params.end).format('yyyy-MM-DD');
    return this.httpClient
      .get<CurrencyInterface>(`${formattedStartDate}..${formattedEndDate}`);
  }

}
