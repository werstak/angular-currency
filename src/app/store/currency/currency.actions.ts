import { createAction, props } from '@ngrx/store';
import { CurrencyInterfaces } from '../../interfaces/currency-interfaces';

export const fetchCurrenciesAction = createAction('[Currency] Fetch Currencies');
export const fetchCurrenciesSuccessAction = createAction(
  '[Currency] Fetch Currencies Success',
  props<{ payload: { [key: string]: string } }>()
);

export const fetchRatesAction = createAction(
  '[Currency] Fetch Rates',
  props<{ start: Date, end: Date }>()
);
export const fetchRatesSuccessAction = createAction(
  '[Currency] Fetch Rates Success',
  props<{ payload: CurrencyInterfaces }>()
);
