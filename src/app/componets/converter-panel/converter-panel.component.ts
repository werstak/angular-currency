import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { selectAllCurrenciesFullNames, selectAllCurrenciesShortNames } from '../../store/currency/currency.selectors';
import { Subscription } from 'rxjs';

import { CurrencyService } from '../../services/currency.service';


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

  constructor(
    private store: Store,
    public currencyService: CurrencyService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
  }


  convertSubmit(): void {
    const params = this.form.value;
    this.inputValue = params.amount;

    this.subConvert = this.currencyService.fetchConvertCurrencies(params).subscribe(data => {
      this.convertFromCurrency = data.base;
      this.convertToCurrency = Object.keys(data.rates);
      this.convertRate = Object.values(data.rates);
    });
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
