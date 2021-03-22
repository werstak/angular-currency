import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchCurrenciesAction } from './store/currency/currency.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular-currency';

  constructor(
    public store: Store,
  ) {
    this.store.dispatch(fetchCurrenciesAction());
  }
}
