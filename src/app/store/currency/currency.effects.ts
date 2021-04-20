import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CurrencyService } from '../../services/currency.service';
import {
  fetchConvertCurrenciesAction,
  fetchConvertSuccessAction,
  fetchCurrenciesAction,
  fetchCurrenciesSuccessAction, fetchRatesAction, fetchRatesSuccessAction
} from './currency.actions';

@Injectable()
export class CurrencyEffects {

  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService
  ) {
  }

  fetchConvertCurrencies$ = createEffect(() => this.actions$.pipe(
    ofType(fetchConvertCurrenciesAction),
    mergeMap((params) => {
      return this.currencyService.fetchConvertCurrencies(params)
        .pipe(
          map((payload) => fetchConvertSuccessAction({payload})),
          catchError(() => EMPTY)
        );
    }))
  );

  fetchCurrency$ = createEffect(() => this.actions$.pipe(
    ofType(fetchCurrenciesAction),
    mergeMap(() => this.currencyService.fetchCurrencies()
      .pipe(
        map(currencies => fetchCurrenciesSuccessAction({payload: currencies})),
        catchError(() => EMPTY)
      )))
  );

  fetchRates$ = createEffect(() => this.actions$.pipe(
    ofType(fetchRatesAction),
    mergeMap((data: { start: Date, end: Date }) => {
      return this.currencyService.getCurrency(data)
        .pipe(
          map((payload) => fetchRatesSuccessAction({payload})),
          catchError(() => EMPTY)
        );
    }))
  );
}
