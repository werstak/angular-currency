import { createAction, props } from '@ngrx/store';

export const fetchCurrencies = createAction('[Currency] Fetch Currencies');
export const fetchCurrenciesSuccess = createAction(
  '[Currency] Fetch Currencies Success',
  props<{ payload: { [key: string]: string } }>()
);
