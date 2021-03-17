import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-display-currencies',
  templateUrl: './display-currencies.component.html',
  styleUrls: ['./display-currencies.component.scss']
})
export class DisplayCurrenciesComponent implements OnInit {
  displayedColumns = ['date', 'aud', 'bgn', 'brl', 'cad', 'chf', 'cny', 'czk', 'dkk'];
  dataSource = ELEMENT_DATA;

  campaignOne: FormGroup;
  campaignTwo: FormGroup;


  constructor(
    public currencyService: CurrencyService,
  ) {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16))
    });

    this.campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month, 15)),
      end: new FormControl(new Date(year, month, 19))
    });
  }


  ngOnInit(): void {
    this.currencyService.getCurrency().subscribe(data => {
      console.log(data);
    });
  }
}

export interface PeriodicElement {
  date: string;
  aud: number;
  bgn: number;
  brl: number;
  cad: number;
  chf: number;
  cny: number;
  czk: number;
  dkk: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: '10.08.2021', aud: 1, bgn: 2, brl: 3, cad: 4, chf: 5, cny: 6, czk: 7, dkk: 8},
  {date: '10.08.2021', aud: 1, bgn: 2, brl: 3, cad: 4, chf: 5, cny: 6, czk: 7, dkk: 8},
  {date: '10.08.2021', aud: 1, bgn: 2, brl: 3, cad: 4, chf: 5, cny: 6, czk: 7, dkk: 8},
  {date: '10.08.2021', aud: 1, bgn: 2, brl: 3, cad: 4, chf: 5, cny: 6, czk: 7, dkk: 8},
  {date: '10.08.2021', aud: 1, bgn: 2, brl: 3, cad: 4, chf: 5, cny: 6, czk: 7, dkk: 8},
  {date: '10.08.2021', aud: 1, bgn: 2, brl: 3, cad: 4, chf: 5, cny: 6, czk: 7, dkk: 8},
  {date: '10.08.2021', aud: 1, bgn: 2, brl: 3, cad: 4, chf: 5, cny: 6, czk: 7, dkk: 8},
  {date: '10.08.2021', aud: 1, bgn: 2, brl: 3, cad: 4, chf: 5, cny: 6, czk: 7, dkk: 8},
  {date: '10.08.2021', aud: 1, bgn: 2, brl: 3, cad: 4, chf: 5, cny: 6, czk: 7, dkk: 8},
  {date: '10.08.2021', aud: 1, bgn: 2, brl: 3, cad: 4, chf: 5, cny: 6, czk: 7, dkk: 8},
  {date: '10.08.2021', aud: 1, bgn: 2, brl: 3, cad: 4, chf: 5, cny: 6, czk: 7, dkk: 8},
  {date: '10.08.2021', aud: 1, bgn: 2, brl: 3, cad: 4, chf: 5, cny: 6, czk: 7, dkk: 8},
  {date: '10.08.2021', aud: 1, bgn: 2, brl: 3, cad: 4, chf: 5, cny: 6, czk: 7, dkk: 8},
  {date: '10.08.2021', aud: 1, bgn: 2, brl: 3, cad: 4, chf: 5, cny: 6, czk: 7, dkk: 8},
  {date: '10.08.2021', aud: 1, bgn: 2, brl: 3, cad: 4, chf: 5, cny: 6, czk: 7, dkk: 8},
];


/*{value: 'AUD', viewValue: 'AUD'},
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
{value: 'ZAR', viewValue: 'ZAR'},*/


/*
import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../currency.service';


@Component({
  selector: 'app-display-currencies',
  templateUrl: './display-currencies.component.html',
  styleUrls: ['./display-currencies.component.scss']
})
export class DisplayCurrenciesComponent implements OnInit {
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor(
    public currencyService: CurrencyService,
  ) {
  }

  ngOnInit(): void {
    this.currencyService.getCurrency().subscribe(data => {
      console.log(data);
    });
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

*/
