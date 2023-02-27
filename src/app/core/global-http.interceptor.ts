import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            // TODO: Show alert popup
            console.log("A server error has happened " + error.statusText);
          } else {
            switch (error.status.toString()[0]) {
              case '4':
                if (error.status.toString() === '409') {
                  // TODO: Show alert popup
                  console.log("You are trying to save a duplicated value!");
                }
                break;
              case '5':
                // TODO: Show alert popup
                console.log("A server error has happened " + error.statusText);
                break;
              default:
                // TODO: Show alert popup
                console.log("A server error has happened " + error.statusText);
            }
          }
        } else {
           // TODO: Show alert popup
           console.log("An error happened " + error.statusText);
        }
        return throwError(error);
      })
    );
  }
}
