import { Action, createReducer, on } from '@ngrx/store';
import { fetchCurrenciesSuccessAction, fetchRatesSuccessAction } from './currency.actions';

export interface currencyState {
  entities: {[key: string]: string};
  rates: {[key: string]: {[key: string]: number}};
  baseCurrency: string;
}

export const initialState: currencyState = {
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

export function currencyReducer(state: currencyState | undefined, action: Action): currencyState {
  return reducer(state, action);
}
