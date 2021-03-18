import { Action, createReducer, on } from '@ngrx/store';
import { fetchCurrenciesSuccessAction } from './currency.actions';

export interface CurrencyState {
  entities: {[key: string]: string};
}

export const initialState: CurrencyState = {
  entities: {},
};

const reducer = createReducer(
  initialState,
  on(fetchCurrenciesSuccessAction, (state, {payload}) => {
    return ({...state, entities: payload});
  }),
);

export function currencyReducer(state: CurrencyState | undefined, action: Action): CurrencyState {
  return reducer(state, action);
}
