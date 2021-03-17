import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyService } from '../../currency.service';

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

  rates: Rates[] = [
    {value: 'USD', viewValue: 'USD'},
    {value: 'EUR', viewValue: 'EUR'},
    {value: 'RUB', viewValue: 'RUB'},
    {value: 'ZAR', viewValue: 'ZAR'},
    {value: 'ZEK', viewValue: 'ZEK'},
    {value: 'TRY', viewValue: 'TRY'}
  ];

  constructor(
    public currencyService: CurrencyService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
    this.currencyService.getCurrency().subscribe(data => {
      console.log(data);
      this.form.setValue({
        amount: data.amount,
        inputCurrencyControl: data.rates,
        outputCurrencyControl: data.rates
      });
    });
  }

  convertSubmit(): void {
  }

  private buildForm(): void {
    this.form = this.fb.group({
      amount: ['', Validators.required],
      inputCurrencyControl: ['EUR'],
      outputCurrencyControl: ['USD']
    });
  }

}
