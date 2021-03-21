import { State } from '../index';
import { createSelector } from '@ngrx/store';
import { currencyState } from './currency.reducer';

export const selectCurrencyState = (state: State) => state.currency;

export const selectAllCurrenciesFullNames = createSelector(
  selectCurrencyState,
  (state: currencyState) => Object.values(state.entities)
);

export const selectAllCurrenciesShortNames = createSelector(
  selectCurrencyState,
  (state: currencyState) => Object.keys(state.entities)
);

export const selectRates = createSelector(
  selectCurrencyState,
  (state: currencyState) => Object.keys(state.rates).map(date => ({...state.rates[date], Date: date}))
);

export const selectBaseCurrency = createSelector(
  selectCurrencyState,
  (state: currencyState) => state.baseCurrency
);

// export const selectConvertCurrency = createSelector(
//   selectCurrencyState,
//   (state: CurrencyState) => Object.keys(state.convert)
// );
