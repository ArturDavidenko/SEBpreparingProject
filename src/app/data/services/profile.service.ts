import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Profile } from './interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  http = inject(HttpClient)
  
  getEmployees() {
     return this.http.get<Profile[]>("https://localhost:7251/Admin/get-all-employeers")
  }
}
