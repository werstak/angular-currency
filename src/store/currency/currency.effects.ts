import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CurrencyService } from '../../services/currency.service';
import { fetchCurrencies, fetchCurrenciesSuccess } from './currency.actions';

@Injectable()
export class CurrencyEffects {
  fetchCurrency$ = createEffect(() => this.actions$.pipe(
    ofType(fetchCurrencies),
    mergeMap(() => this.currencyService.fetchCurrencies()
    .pipe(
      map(currencies => fetchCurrenciesSuccess({payload: currencies})),
      catchError(() => EMPTY)
    )))
  );

  constructor(
    private actions$: Actions,
    private currencyService: CurrencyService
  ) {}
}
