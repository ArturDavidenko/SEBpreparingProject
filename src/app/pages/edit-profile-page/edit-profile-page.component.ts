import { Component, inject, signal } from '@angular/core';
import { Profile } from '../../data/services/interfaces/profile.interface';
import { Router } from '@angular/router';
import { ProfileHeaderComponent } from "../../common-ui/profile-header/profile-header.component";

@Component({
  selector: 'app-edit-profile-page',
  imports: [ProfileHeaderComponent],
  standalone: true,
  templateUrl: './edit-profile-page.component.html',
  styleUrl: './edit-profile-page.component.scss'
})

export class EditProfilePageComponent {
  private router = inject(Router);
  
  profile = signal<Profile | null>(null)
  
  constructor() {
    const nav = this.router.getCurrentNavigation();
    const stateProfile = nav?.extras?.state?.['profile'] as Profile | null;
    if (stateProfile) {
      this.profile.set(stateProfile);
    }
  }
}
