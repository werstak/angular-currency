import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { throwError } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {
  fetchConvertCurrenciesAction,
  fetchConvertSuccessAction,
  fetchCurrenciesAction,
  fetchCurrenciesSuccessAction, fetchRatesAction, fetchRatesSuccessAction
} from './currency.actions';
import { ConvertParamsInterface } from '../../interfaces/convert-params.interface';

import { CurrencyService } from '../../services/currency.service';

@Injectable()

export class CurrencyEffects {

  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService
  ) {
  }

  fetchConvertCurrencies$ = createEffect(() => this.actions$.pipe(
    ofType(fetchConvertCurrenciesAction),
    mergeMap((params: ConvertParamsInterface) => {
      return this.currencyService.fetchConvertCurrencies(params)
        .pipe(
          map((payload) => fetchConvertSuccessAction({payload})),
          catchError(error => {
            console.log('Error: ', error.message);
            return throwError(error);
          }),
        );
    }))
  );

  fetchCurrency$ = createEffect(() => this.actions$.pipe(
    ofType(fetchCurrenciesAction),
    mergeMap(() => this.currencyService.fetchListCurrencies()
      .pipe(
        map(currencies => fetchCurrenciesSuccessAction({payload: currencies})),
        catchError(error => {
          console.log('Error: ', error.message);
          return throwError(error);
        }),
      )))
  );

  fetchRates$ = createEffect(() => this.actions$.pipe(
    ofType(fetchRatesAction),
    mergeMap((data: { start: Date, end: Date }) => {
      return this.currencyService.fetchCourseCurrency(data)
        .pipe(
          map((payload) => fetchRatesSuccessAction({payload})),
          catchError(error => {
            console.log('Error: ', error.message);
            return throwError(error);
          }),
        );
    }))
  );
}
