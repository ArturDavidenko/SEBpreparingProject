import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { map, Observable, tap } from 'rxjs';
import { IAuthService } from '../interfaces/auth.service.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements IAuthService {

  constructor(
    private http: HttpClient,
    private cookiesService: CookieService
  ){}

  get isAuth(){
    return !!this.cookiesService.get('authToken')
  }

  loginAndSetCookie(payload: {employeerLastName: string, employeerPassword: string}): Observable<void> {
    return this.http
      .post<{ token: string; expiration: number }>(
        'https://localhost:7028/AuthService/Login-employeers',
        payload
      )
      .pipe(
        tap(response => {
          this.cookiesService.delete('token');
          this.cookiesService.set('authToken', response.token, response.expiration / (60 * 60 * 24));
        }),
        map(() => void 0)
      );
  }
}
