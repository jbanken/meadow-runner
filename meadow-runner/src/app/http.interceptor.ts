import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor} 
     from "@angular/common/http";
import {HttpRequest} from "@angular/common/http";

import { Observable } from 'rxjs/Observable';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    debugger;
    req = req.clone({
      setHeaders: {
        'joe': 'banken'
      }
    });

    return next.handle(req);

  }
}