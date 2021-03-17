import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface CurrenciesDefault {
  value: string;
  viewValue: string;
}

interface CurrenciesOutput {
  value: string;
  viewValue: string;
}

/**
 * @title Select in a form
 */
@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {
  dataForm: FormGroup;
  amountControl = new FormControl('', [Validators.required]);
  inputCurrencyControl = new FormControl('EUR');
  outputCurrencyControl = new FormControl('USD');

  currenciesDefault: CurrenciesDefault[] = [
    {value: 'USD', viewValue: 'USD'},
    {value: 'EUR', viewValue: 'EUR'},
    {value: 'RUB', viewValue: 'RUB'},
    {value: 'ZAR', viewValue: 'ZAR'},
    {value: 'ZEK', viewValue: 'ZEK'},
    {value: 'TRY', viewValue: 'TRY'}
  ];

  currenciesOutput: CurrenciesOutput[] = [
    {value: 'USD', viewValue: 'USD'},
    {value: 'EUR', viewValue: 'EUR'},
    {value: 'RUB', viewValue: 'RUB'},
    {value: 'ZAR', viewValue: 'ZAR'},
    {value: 'ZEK', viewValue: 'ZEK'},
    {value: 'TRY', viewValue: 'TRY'}
  ];

  /*  constructor() {
    }*/

  constructor(fb: FormBuilder) {
    this.dataForm = fb.group({
      amountCurrency: this.amountControl,
      inputCurrency: this.inputCurrencyControl,
      outputCurrency: this.outputCurrencyControl,
    });
  }

  convertSubmit(): void {
    console.log(this.dataForm.value);
  }


  ngOnInit(): void {

  }


}
