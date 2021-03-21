import { createAction, props } from '@ngrx/store';

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
  props<{
    payload: {
      amount: number,
      base: string,
      end_date: string
      start_date: string
      rates: { [key: string]: { [key: string]: number }},
    }
  }>()
);
