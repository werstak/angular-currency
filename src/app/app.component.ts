import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-currency';

  // constructor(private http: HttpClient) {
  //   this.http.get('https://api.frankfurter.app/latest').subscribe(console.log);
  // }
}
