import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyService } from '../../services/currency.service';
import { selectAllCurrenciesFullNames, selectAllCurrenciesShortNames } from '../../store/currency/currency.selectors';
import { Store } from '@ngrx/store';
import { fetchCurrenciesAction } from '../../store/currency/currency.actions';
import { Observable, Subscription } from 'rxjs';


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

  allCurrenciesFullNames$ = this.store.select(selectAllCurrenciesFullNames);
  allCurrenciesShortNames$ = this.store.select(selectAllCurrenciesShortNames);

  // allCurrenciesShortNames$ = this.currencyService.allCurrenciesShortNames$;
  // allCurrenciesFullNames$ = this.currencyService.allCurrenciesFullNames$;


  constructor(
    private store: Store,
    public currencyService: CurrencyService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.buildForm();

    /*    this.currencyService.getCurrency().subscribe(data => {
          console.log(data);
          this.form.setValue({
            amount: data.amount,
            inputCurrencyControl: data.rates,
            outputCurrencyControl: data.rates
          });
        });*/


  }


  convertSubmit(): void {
    // this.store.dispatch(fetchCurrenciesAction());

    const params = this.form.value;
    this.inputValue = params.amount;

    this.subConvert = this.currencyService.fetchConvertCurrencies(params).subscribe(data => {
      this.convertFromCurrency = data.base;
      this.convertToCurrency = Object.keys(data.rates);
      this.convertRate = Object.values(data.rates);
      console.log(data);
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
