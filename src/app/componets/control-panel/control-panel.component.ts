import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrencyService } from '../../services/currency.service';
import { selectAllCurrenciesFullNames, selectAllCurrenciesShortNames } from '../../store/currency/currency.selectors';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {
  form: FormGroup;
  resultConversion = false;

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
    // this.currencyService.getCurrency().subscribe(data => {
    //   console.log(data);
    //   this.form.setValue({
    //     amount: data.amount,
    //     inputCurrencyControl: data.rates,
    //     outputCurrencyControl: data.rates
    //   });
    // });
  }


  showResultConversion(): void {
    this.resultConversion = !this.resultConversion;
  }

  convertSubmit(): void {
    console.log(this.form.value);
    this.showResultConversion();
  }

  private buildForm(): void {
    this.form = this.fb.group({
      amount: ['', Validators.required],
      inputCurrencyControl: ['EUR'],
      outputCurrencyControl: ['USD']
    });
  }

}
