import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Profile } from './interfaces/profile.interface';
import { map } from 'rxjs';
import { ProfileDTO } from './interfaces/profileDTO.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  http = inject(HttpClient)
  
  getEmployees() {
     return this.http.get<Profile[]>("https://localhost:7251/Admin/get-all-employeers")
  }

  getSubscribers(){
    return this.http.get<Profile[]>("https://localhost:7251/Admin/get-all-employeers")
    .pipe(
      map(employeers => employeers.slice(0, 3))
    );
  }

  getEmpoyeeProfile(employeeId: string){
    return this.http.get<Profile>(`https://localhost:7251/Admin/get-employeer/${employeeId}`)
  }

  updateEmployeeProfile(profileDataToUpdate: ProfileDTO, employeeId: string){
    return this.http.put<ProfileDTO>(`https://localhost:7251/Admin/update-employeer/${employeeId}`, profileDataToUpdate)
  }
  
}
