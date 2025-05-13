import { Component, inject } from '@angular/core';
import { ProfileHeaderComponent } from "../../common-ui/profile-header/profile-header.component";
import { ProfileService } from '../../data/services/profile.service';
import { CookieService } from 'ngx-cookie-service';
import { Profile } from '../../data/services/interfaces/profile.interface';
import { jwtDecode } from 'jwt-decode';
import { switchMap, tap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { toObservable } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-profile-page',
  imports: [ProfileHeaderComponent, AsyncPipe],
  standalone: true,
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {
  profileServices = inject(ProfileService)
  cookieService = inject(CookieService)
  route = inject(ActivatedRoute)

  currentEmployeeId!: string
  
   ngOnInit(){
    const token = this.cookieService.get('authToken');
    if (token){
      const decodedToken: any = jwtDecode(token)
      const Id = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']
      this.currentEmployeeId = Id
      this.profile$ = this.profileServices.getEmpoyeeProfile(Id);
    }

    console.log("ngOninit", this.currentEmployeeId)
  }

  profile$ = this.route.params
    .pipe(
      switchMap(({currentEmployeeId}) => {
        console.log("switchMap" , currentEmployeeId)
        return this.profileServices.getEmpoyeeProfile(currentEmployeeId)
    })
  )

}
