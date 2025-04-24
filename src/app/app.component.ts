import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestCardComponent } from './common-ui/test-card/test-card.component';
import { ProfileService } from './data/services/profile.service';
import { Profile } from './data/services/interfaces/profile.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  profileService = inject(ProfileService)
  profiles: Profile[] = [];

  constructor() {
    this.profileService.getEmployees().subscribe(val => {
      this.profiles = val
    })
  }

}
