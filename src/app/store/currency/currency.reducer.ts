import { Action, createReducer, on } from '@ngrx/store';
import {
  fetchConvertSuccessAction,
  fetchCurrenciesSuccessAction,
  fetchRatesSuccessAction
} from './currency.actions';


export interface CurrencyState {
  converts: {
    fromAmount: number;
    toAmount: number;
    from: string;
    to: string;
  };
  entities: { [key: string]: string };
  rates: { [key: string]: { [key: string]: number } };
  baseCurrency: string;
}

export interface State {
  currency: CurrencyState;
}

export const initialState: CurrencyState = {
  converts: null,
  entities: {},
  rates: {},
  baseCurrency: 'EUR',
};


const reducer = createReducer(
  initialState,
  on(fetchConvertSuccessAction, (state, {payload}) => {
    const [to] = Object.keys(payload.rates);
    return ({
      ...state,
      converts: {
        fromAmount: payload.amount,
        toAmount: payload.rates[to],
        from: payload.base,
        to,
      }
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

export function currencyReducer(state: CurrencyState, action: Action): CurrencyState {
  return reducer(state, action);
}
