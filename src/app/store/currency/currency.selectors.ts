import { State } from '../index';
import { createSelector } from '@ngrx/store';
import { CurrencyState } from './currency.reducer';

export const selectCurrencyState = (state: State) => state.currency;

export const selectAllCurrencies = createSelector(
  selectCurrencyState,
  (state: CurrencyState) => state.entities
);

export const selectAllCurrenciesShortNames = createSelector(
  selectCurrencyState,
  (state: CurrencyState) => Object.keys(state.entities)
);
