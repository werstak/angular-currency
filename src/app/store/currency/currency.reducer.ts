import { Action, createReducer, on } from '@ngrx/store';
import { fetchCurrenciesSuccessAction, convertCurrencySuccessAction } from './currency.actions';

export interface CurrencyState {
  entities: {[key: string]: string};
  convert: any;
}

export const initialState: CurrencyState = {
  entities: {},
  convert: {},
};

const reducer = createReducer(
  initialState,
  on(fetchCurrenciesSuccessAction, (state, {payload}) => {
    return ({...state, entities: payload});
  }),

  on(convertCurrencySuccessAction, (state, {payload}) => {
    return ({...state, convert: payload});
  }),


);

export function currencyReducer(state: CurrencyState | undefined, action: Action): CurrencyState {
  return reducer(state, action);
}
