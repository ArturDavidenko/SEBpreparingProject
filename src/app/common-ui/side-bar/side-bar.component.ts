import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { SubscriberCardComponent } from "./subscriber-card/subscriber-card.component";
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../data/services/profile.service';
import { AsyncPipe } from '@angular/common';
import { Profile } from '../../data/services/interfaces/profile.interface';
import { CookieService } from 'ngx-cookie-service';
import { Subject, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-side-bar',
  imports: [NgFor, SubscriberCardComponent, RouterLink, AsyncPipe],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  
  
  profileServices = inject(ProfileService)
  cookieService = inject(CookieService)


  subscribers$ = this.profileServices.getSubscribers()

  me!: Profile 
  private destroy$ = new Subject<void>();


  ngOnInit(){
    const token = this.cookieService.get('authToken');

    if (token){
      const decodedToken: any = jwtDecode(token)
      const currentEmployeeId = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']
      this.profileServices.getEmpoyeeProfile(currentEmployeeId)
      .pipe(
        tap(res => {
          this.me = res;
          console.log(this.me);
        })
      )
      .subscribe();
      
    }
  }
  
  menuItems = [
    {
      label: 'My page',
      link: ''
    },
    {
      label: 'Chats',
      link: 'chats'
    },
    {
      label: 'Search page',
      link: 'search'
    }
  ]


  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
