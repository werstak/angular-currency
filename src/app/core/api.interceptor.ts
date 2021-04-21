import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const httpsReq = req.clone({
      url: req.url.replace('baseUrl', 'https://api.frankfurter.app/')
    });
    return next.handle(httpsReq);
  }
}
