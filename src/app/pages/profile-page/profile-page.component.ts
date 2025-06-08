import { Component, inject } from '@angular/core';
import { ProfileHeaderComponent } from "../../common-ui/profile-header/profile-header.component";
import { ProfileService } from '../../data/services/profile.service';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from 'jwt-decode';
import { interval, startWith, switchMap } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-profile-page',
  imports: [ProfileHeaderComponent, AsyncPipe, RouterLink],
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
      this.currentEmployeeId = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']
    }

    console.log("ngOninit", this.currentEmployeeId)
  }

    profile$ = this.route.params.pipe(
    switchMap(({ id }) =>
      interval(5000).pipe( 
        startWith(0), 
        switchMap(() => this.profileServices.getEmpoyeeProfile(id))
      )
    )
  );

}
