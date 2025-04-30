import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})


export class AuthInterceptorService implements HttpInterceptor {

  private cookieService = inject(CookieService);

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log('Interceptor triggered')

    const token = this.cookieService.get('authToken');
    console.log(token)

    if (token){
      const cloned = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`) 
      });
      return next.handle(cloned);
    }
    return next.handle(request);
  }
}
