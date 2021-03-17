import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyService } from '../../services/currency.service';


@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {
  form: FormGroup;
  showResultConversion = false;
  allCurrenciesShortNames$ = this.currencyService.allCurrenciesShortNames$;


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
