import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCurrenciesComponent } from './display-currencies.component';

describe('DisplayCurrenciesComponent', () => {
  let component: DisplayCurrenciesComponent;
  let fixture: ComponentFixture<DisplayCurrenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCurrenciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
