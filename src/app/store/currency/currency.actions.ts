import { createAction, props } from '@ngrx/store';

export const fetchCurrenciesAction = createAction('[Currency] Fetch Currencies');
export const fetchCurrenciesSuccessAction = createAction(
  '[Currency] Fetch Currencies Success',
  props<{ payload: { [key: string]: string } }>()
);
