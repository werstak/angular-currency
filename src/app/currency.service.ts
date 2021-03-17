import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) {
  }

  /*  getCurrency(): void {
      return this.http.get('https://api.frankfurter.app/latest').subscribe(console.log);
    }*/

  getCurrency(): Observable<any> {
    return this.http.get<any>(`${environment.serverUrl}latest`)
      .pipe(
        catchError(error => {
          console.log('Error: ', error.message);
          return throwError(error);
        }),
      );
  }
}
