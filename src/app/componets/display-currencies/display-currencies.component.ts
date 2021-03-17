import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';


@Component({
  selector: 'app-display-currencies',
  templateUrl: './display-currencies.component.html',
  styleUrls: ['./display-currencies.component.scss']
})
export class DisplayCurrenciesComponent implements OnInit {
  displayedColumns$: Observable<string[]>;
  dataSource$: Observable<any>;

  campaignOne = new FormGroup({
    start: new FormControl(null, Validators.required),
    end: new FormControl(null, Validators.required)
  });

  constructor(
    public currencyService: CurrencyService,
  ) {
  }


  ngOnInit(): void {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne.reset({
      start: new Date(year, month, 13),
      end: new Date(year, month, 16),
    });

    this.dataSource$ = this.campaignOne.valueChanges
    .pipe(
      filter(() => this.campaignOne.valid),
      switchMap(params => {
        params.start = '2020-01-01'; // moment(params.start).format('yyyy-mm-dd')
        params.end = '2020-01-31';
        return this.currencyService.getCurrency(params);
      }),
      map(({rates}) => {
        return Object.keys(rates).map(date => ({...rates[date], Date: date}));
      })
    );

    this.displayedColumns$ = this.currencyService.allCurrenciesShortNames$.pipe(
      map(currencies => ['Date', ...currencies]),
    );
  }
}
