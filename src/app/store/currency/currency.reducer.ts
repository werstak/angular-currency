import { Action, createReducer, on } from '@ngrx/store';
import { fetchCurrenciesSuccessAction, fetchRatesSuccessAction } from './currency.actions';

export interface CurrencyState {
  entities: { [key: string]: string };
  rates: { [key: string]: { [key: string]: number } };
  baseCurrency: string;
}

export const initialState: CurrencyState = {
  entities: {},
  rates: {},
  baseCurrency: 'EUR',
};

const reducer = createReducer(
  initialState,
  on(fetchCurrenciesSuccessAction, (state, {payload}) => {
    return ({...state, entities: payload});
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
