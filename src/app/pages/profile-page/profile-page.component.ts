import { Component, inject } from '@angular/core';
import { ProfileHeaderComponent } from "../../common-ui/profile-header/profile-header.component";
import { ProfileService } from '../../data/services/profile.service';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from 'jwt-decode';
import { switchMap } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';


@Component({
  selector: 'app-profile-page',
  imports: [ProfileHeaderComponent, AsyncPipe, RouterLink, CommonModule],
  standalone: true,
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {

  profileServices = inject(ProfileService)
  cookieService = inject(CookieService)
  route = inject(ActivatedRoute)
  profile$ = this.profileServices.profile$;
  currentEmployeeId!: string

   ngOnInit(){
    const token = this.cookieService.get('authToken');
    if (token){
      const decodedToken: any = jwtDecode(token)
      this.currentEmployeeId = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']
    }

    console.log("ngOninit", this.currentEmployeeId)

    const employeeId = this.route.snapshot.params['id'];
    this.profileServices.LoadEmpoyeeProfile(employeeId);
  }

  //   profile$ = this.route.params
  //   .pipe(
  //     switchMap(({id}) => {
  //       console.log("switchMap" , id)
  //       return this.profileServices.getEmpoyeeProfile(id)
  //   })
  // )

}
