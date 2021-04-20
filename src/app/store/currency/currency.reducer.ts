import { Action, createReducer, on } from '@ngrx/store';
import {
  fetchConvertSuccessAction,
  fetchCurrenciesSuccessAction,
  fetchRatesSuccessAction
} from './currency.actions';
import { CurrencyInterfaces } from '../../interfaces/currency-interfaces';

export interface CurrencyState {
  converts: CurrencyInterfaces;
  entities: { [key: string]: string };
  rates: { [key: string]: { [key: string]: number } };
  baseCurrency: string;
}

export const initialState: CurrencyState = {
  converts: {},
  entities: {},
  rates: {},
  baseCurrency: 'EUR',
};

const reducer = createReducer(
  initialState,
  on(fetchConvertSuccessAction, (state, {payload}) => {
    return ({
      ...state,
      converts: payload
    });
  }),
  on(fetchCurrenciesSuccessAction, (state, {payload}) => {
    return ({
      ...state,
      entities: payload
    });
  }),
  on(fetchRatesSuccessAction, (state, {payload}) => {
    return {
      ...state,
      rates: payload.rates,
      baseCurrency: payload.base,
    };
  }),
);

export function currencyReducer(state: CurrencyState | undefined, action: Action): CurrencyState {
  return reducer(state, action);
}
