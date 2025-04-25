import { Component, inject } from '@angular/core';
import { TestCardComponent } from '../../common-ui/test-card/test-card.component';
import { RouterModule } from '@angular/router';
import { Profile } from '../../data/services/interfaces/profile.interface';
import { ProfileService } from '../../data/services/profile.service';

@Component({
  selector: 'app-search-page',
  imports: [TestCardComponent, RouterModule],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})

export class SearchPageComponent {
  profileService = inject(ProfileService)
  profiles: Profile[] = [];

  constructor() {
    this.profileService.getEmployees().subscribe(val => {
      this.profiles = val
    })
  }
}
