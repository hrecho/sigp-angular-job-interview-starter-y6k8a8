import { Inject, Injectable, Optional } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {

    constructor(
    ) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = this.addAuthorization(req);
        return next.handle(req);
        
    }

    addAuthorization(req: HttpRequest<any>): HttpRequest<any> {
        req = req.clone({
            setHeaders: {
                'authorization': 'SIGP'
            }
        });
        return req;
    }
}
