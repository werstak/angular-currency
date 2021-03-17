import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyService } from '../../services/currency.service';

interface Rates {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {
  form: FormGroup;
  showResultConversion = false;

  rates: Rates[] = [
    {value: 'AUD', viewValue: 'AUD'},
    {value: 'BGN', viewValue: 'BGN'},
    {value: 'BRL', viewValue: 'BRL'},
    {value: 'CAD', viewValue: 'CAD'},
    {value: 'CHF', viewValue: 'CHF'},
    {value: 'CNY', viewValue: 'CNY'},
    {value: 'CZK', viewValue: 'CZK'},
    {value: 'DKK', viewValue: 'DKK'},
    {value: 'GBP', viewValue: 'GBP'},
    {value: 'HKD', viewValue: 'HKD'},
    {value: 'HRK', viewValue: 'HRK'},
    {value: 'HUF', viewValue: 'HUF'},
    {value: 'IDR', viewValue: 'IDR'},
    {value: 'ILS', viewValue: 'ILS'},
    {value: 'INR', viewValue: 'INR'},
    {value: 'ISK', viewValue: 'ISK'},
    {value: 'JPY', viewValue: 'JPY'},
    {value: 'KRW', viewValue: 'KRW'},
    {value: 'MXN', viewValue: 'MXN'},
    {value: 'MYR', viewValue: 'MYR'},
    {value: 'NOK', viewValue: 'NOK'},
    {value: 'NZD', viewValue: 'NZD'},
    {value: 'PHP', viewValue: 'PHP'},
    {value: 'PLN', viewValue: 'PLN'},
    {value: 'RON', viewValue: 'RON'},
    {value: 'RUB', viewValue: 'RUB'},
    {value: 'SEK', viewValue: 'SEK'},
    {value: 'SGD', viewValue: 'SGD'},
    {value: 'THB', viewValue: 'THB'},
    {value: 'TRY', viewValue: 'TRY'},
    {value: 'USD', viewValue: 'USD'},
    {value: 'ZAR', viewValue: 'ZAR'},
  ];

  constructor(
    public currencyService: CurrencyService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
    // this.currencyService.getCurrency().subscribe(data => {
    //   console.log(data);
    //   this.form.setValue({
    //     amount: data.amount,
    //     inputCurrencyControl: data.rates,
    //     outputCurrencyControl: data.rates
    //   });
    // });
  }


  toggleResultConversion(): void {
    this.showResultConversion = !this.showResultConversion;
  }

  convertSubmit(): void {
    console.log(this.form.value);
    this.toggleResultConversion();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      amount: ['', Validators.required],
      inputCurrencyControl: ['EUR'],
      outputCurrencyControl: ['USD']
    });
  }

}
