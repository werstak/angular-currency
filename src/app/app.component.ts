import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchCurrencies } from './store/currency/currency.actions';
import { selectAllCurrencies } from './store/currency/currency.selectors';

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
    this.store.dispatch(fetchCurrencies());
  }
}
