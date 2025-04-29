import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { last, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient)

  loginAndSetCookie(payload: {employeerLastName: string, employeerPassword: string}){
    return this.http.post<{ token: string; expiration: number }>
    ("https://localhost:7251/Auth/Login-employeers", payload).pipe(
      tap(response => {
        document.cookie = "token=; path=/; max-age=0";
        document.cookie = `authToken=${response.token}; path=/; max-age=${response.expiration}`;
      })
    );
  }


}
