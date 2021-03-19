import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CurrencyService } from '../../services/currency.service';
import { convertCurrencyAction, fetchCurrenciesAction, fetchCurrenciesSuccessAction } from './currency.actions';

@Injectable()
export class CurrencyEffects {
  fetchCurrency$ = createEffect(() => this.actions$.pipe(
    ofType(fetchCurrenciesAction),
    mergeMap(() => this.currencyService.fetchCurrencies()
    .pipe(
      map(currencies => fetchCurrenciesSuccessAction({payload: currencies})),
      catchError(() => EMPTY)
    )))
  );

  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService
  ) {}
}

/*export class CurrencyConvertEffects {
  convertCurrency$ = createEffect(() => this.actions$.pipe(
    ofType(convertCurrencyAction),
    mergeMap(() => this.currencyService.fetchCurrencies()
    .pipe(
      map(currencies => fetchCurrenciesSuccessAction({payload: currencies})),
      catchError(() => EMPTY)
    )))
  );

  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService
  ) {}
}*/
