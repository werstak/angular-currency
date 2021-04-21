import { createAction, props } from '@ngrx/store';
import { CurrencyInterface } from '../../interfaces/currency-Interface';
import { ConvertCurrencyInterface } from '../../interfaces/convert-currency.interface';


export const fetchConvertCurrenciesAction = createAction(
  '[Currency] Fetch Convert',
  props<{ amount: number, from: string, to: string }>()
);

export const fetchConvertSuccessAction = createAction(
  '[Currency] Fetch Convert Success',
  props<{ payload: ConvertCurrencyInterface }>()
);

export const fetchCurrenciesAction = createAction(
  '[Currency] Fetch Currencies'
);

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
  props<{ payload: CurrencyInterface }>()
);
