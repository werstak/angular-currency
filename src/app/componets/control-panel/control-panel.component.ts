/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/



import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

interface Car {
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
  value = 'Clear me';
  selectedValue: string;
  selectedCar: string;
  selectGroup: FormGroup;
  amountControl = new FormControl('');
  inputCurrencyControl = new FormControl('primary');
  outputCurrencyControl = new FormControl('primary');

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  cars: Car[] = [
    {value: 'volvo', viewValue: 'Volvo'},
    {value: 'saab', viewValue: 'Saab'},
    {value: 'mercedes', viewValue: 'Mercedes'}
  ];

  constructor() {
  }

/*  constructor(fb: FormBuilder) {
    this.selectGroup = fb.group({
      fontSize: this.amountControl,
      color: this.inputCurrencyControl,
      color2: this.colorControl,
    });
  }*/

  ngOnInit(): void {

  }



}
