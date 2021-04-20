import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { selectAllCurrenciesFullNames, selectAllCurrenciesShortNames, selectConvert } from '../../store/currency/currency.selectors';
import { Subscription } from 'rxjs';

import { CurrencyService } from '../../services/currency.service';
import { fetchConvertCurrenciesAction, fetchRatesAction } from '../../store/currency/currency.actions';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-control-panel',
  templateUrl: './converter-panel.component.html',
  styleUrls: ['./converter-panel.component.scss']
})

export class ConverterPanelComponent implements OnInit, OnDestroy {
  form: FormGroup;

  inputValue: any;
  convertFromCurrency: string;
  convertToCurrency: any;
  convertRate: {};
  subConvert: Subscription;

  allCurrenciesShortNames$ = this.store.select(selectAllCurrenciesShortNames);
  allCurrenciesFullNames$ = this.store.select(selectAllCurrenciesFullNames);
  converts$ = this.store.select(selectConvert);

  constructor(
    private store: Store,
    public currencyService: CurrencyService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.buildForm();

    this.subConvert = this.converts$
      .pipe(filter(data => Boolean(data)))
      .subscribe(data => {
        this.convertFromCurrency = data.from;
        this.convertToCurrency = data.to;
        this.convertRate = data.toAmount;
      });
  }

  convertSubmit(): void {
    const params = this.form.value;
    this.inputValue = params.amount;

    this.store.dispatch(fetchConvertCurrenciesAction(params));
  }

  private buildForm(): void {
    this.form = this.fb.group({
      amount: ['', Validators.required],
      from: ['EUR'],
      to: ['USD']
    });
  }

  ngOnDestroy(): void {
    this.subConvert.unsubscribe();
  }

}
