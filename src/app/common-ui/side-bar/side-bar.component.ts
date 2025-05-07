import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { SubscriberCardComponent } from "./subscriber-card/subscriber-card.component";
import { RouterLink } from '@angular/router';
import { ProfileService } from '../../data/services/profile.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  imports: [NgFor, SubscriberCardComponent, RouterLink, AsyncPipe],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  
  profileServices = inject(ProfileService)
  
  subscribers$ = this.profileServices.getSubscribers()

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
}
