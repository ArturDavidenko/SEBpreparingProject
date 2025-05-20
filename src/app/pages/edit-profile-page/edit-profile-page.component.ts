import { Component, inject, signal } from '@angular/core';
import { Profile } from '../../data/services/interfaces/profile.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile-page',
  imports: [],
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
