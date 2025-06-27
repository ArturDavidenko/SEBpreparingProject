import { Component, inject } from '@angular/core';
import { TestCardComponent } from '../../common-ui/test-card/test-card.component';
import { RouterModule } from '@angular/router';
import { Profile } from '../../data/services/interfaces/profile.interface';
import { ProfileService } from '../../data/services/profile.service';
import { TestStorybookComponent } from '../test-storybook/test-storybook.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [TestCardComponent, RouterModule, TestStorybookComponent, CommonModule],
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
