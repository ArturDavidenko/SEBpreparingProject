import { Component, inject } from '@angular/core';
import { ProfileHeaderComponent } from "../../common-ui/profile-header/profile-header.component";
import { ProfileService } from '../../data/services/profile.service';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from 'jwt-decode';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Profile } from '../../data/services/interfaces/profile.interface';
import { TestCardComponent } from '../../common-ui/test-card/test-card.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-profile-page',
  imports: [ProfileHeaderComponent, 
    AsyncPipe, 
    RouterLink, 
    CommonModule,
    TestCardComponent
  ],
  standalone: true,
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {

  profileServices = inject(ProfileService)
  cookieService = inject(CookieService)
  route = inject(ActivatedRoute)
  http = inject(HttpClient)
  profile$ = this.profileServices.profile$;
  currentEmployeeId!: string

  profiles: Profile[] = [];
  user: any;
  mockedProfiles: any;

  constructor() {
    this.profileServices.getEmployees().subscribe(val => {
      this.profiles = val
    })

    this.http.get('https://api.example.com/profiles').subscribe((data) => {
      this.mockedProfiles = data
    })
  }


   ngOnInit(){
    const token = this.cookieService.get('authToken');
    if (token){
      const decodedToken: any = jwtDecode(token)
      this.currentEmployeeId = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']
    }

    console.log("ngOninit", this.currentEmployeeId)

    const employeeId = this.route.snapshot.params['id'];
    this.profileServices.LoadEmpoyeeProfile(employeeId);

    this.http.get('https://api.example.com/user').subscribe((data) => {
      this.user = data
      console.log(`Mock user is: ${this.user}`)
    });
    
    
  }

  //   profile$ = this.route.params
  //   .pipe(
  //     switchMap(({id}) => {
  //       console.log("switchMap" , id)
  //       return this.profileServices.getEmpoyeeProfile(id)
  //   })
  // )

}
