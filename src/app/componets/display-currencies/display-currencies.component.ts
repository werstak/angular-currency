import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { fetchRatesAction } from '../../store/currency/currency.actions';
import {
  selectAllCurrenciesShortNames,
  selectBaseCurrency,
  selectRates
} from '../../store/currency/currency.selectors';

import { CurrencyService } from '../../services/currency.service';

import * as moment from 'moment';


@Component({
  selector: 'app-display-currencies',
  templateUrl: './display-currencies.component.html',
  styleUrls: ['./display-currencies.component.scss']
})

export class DisplayCurrenciesComponent implements OnInit {

  displayedColumns$: Observable<string[]>;
  campaignOne = new FormGroup({
    start: new FormControl(null, Validators.required),
    end: new FormControl(null, Validators.required)
  });

  dataSource$ = this.store.select(selectRates);
  allCurrenciesShortNames$ = this.store.select(selectAllCurrenciesShortNames);
  baseCurrency$ = this.store.select(selectBaseCurrency);

  constructor(
    public currencyService: CurrencyService,
    public store: Store,
  ) {
  }

  ngOnInit(): void {
    this.fetchRates();
  }

  private fetchRates(): void {
    const values: Observable<{ start: Date, end: Date }> = this.campaignOne.valueChanges;
    values.pipe(
      filter(() => this.campaignOne.valid),
      filter(({start, end}) => start <= end),
    )
      .subscribe((params) => {
        this.store.dispatch(fetchRatesAction(params));
      });

    this.campaignOne.reset({
      start: moment().subtract(10, 'days').toDate(),
      end: moment().toDate(),
    });

    this.displayedColumns$ = combineLatest([
      this.allCurrenciesShortNames$,
      this.baseCurrency$
    ]).pipe(
      map(([currencies, baseCurrency]) => {
        const filteredCurrencies = currencies.filter(currency => currency !== baseCurrency);
        return ['Date', ...filteredCurrencies];
      }),
    );
  }

}
