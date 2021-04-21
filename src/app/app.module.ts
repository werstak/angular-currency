import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { ConverterPanelComponent } from './componets/converter-panel/converter-panel.component';
import { DisplayCurrenciesComponent } from './componets/display-currencies/display-currencies.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { CurrencyEffects } from './store/currency/currency.effects';
// import { reducers, metaReducers } from './store';
import { environment } from '../environments/environment';

import { CurrencyService } from './services/currency.service';
import { BaseUrlInterceptor } from './core/api.interceptor';
import { currencyReducer } from './store/currency/currency.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConverterPanelComponent,
    DisplayCurrenciesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot({ currency: currencyReducer }),
/*    StoreModule.forRoot(reducers, {
      metaReducers
    }),*/
    EffectsModule.forRoot([CurrencyEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    CurrencyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
