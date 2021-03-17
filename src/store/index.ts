import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { currencyReducer } from './currency/currency.reducer';

export interface State {
  currency: ReturnType<typeof currencyReducer>;
}

export const reducers: ActionReducerMap<State> = {
  currency: currencyReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
