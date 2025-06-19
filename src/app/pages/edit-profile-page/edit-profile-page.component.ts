import { Component, effect, inject, signal } from '@angular/core';
import { Profile } from '../../data/services/interfaces/profile.interface';
import { Router, RouterModule } from '@angular/router';
import { ProfileHeaderComponent } from "../../common-ui/profile-header/profile-header.component";
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProfileService } from '../../data/services/profile.service';
import { ProfileDTO } from '../../data/services/interfaces/profileDTO.interface';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-edit-profile-page',
  imports: [ProfileHeaderComponent, ReactiveFormsModule, RouterModule],
  standalone: true,
  templateUrl: './edit-profile-page.component.html',
  styleUrl: './edit-profile-page.component.scss'
})

export class EditProfilePageComponent {
  constructor() {
      const nav = this.router.getCurrentNavigation();
      const stateProfile = nav?.extras?.state?.['profile'] as Profile | null;
      if (stateProfile) {
        this.profile.set(stateProfile);
      }

      effect(() => {
        const profileToInputValue = this.profile();
        if (profileToInputValue){
          this.form.patchValue(profileToInputValue);
        }
      })

    }
  
  private router = inject(Router);

  profileService = inject(ProfileService)
  
  profile = signal<Profile | null>(null)
  
  formBuilder = inject(FormBuilder)

  roles = signal(['admin', 'manager', 'employeer']);

  form = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    role: ['', Validators.required]
  })

  async onSave(){
    this.form.markAsTouched()
    this.form.updateValueAndValidity()

    if(this.form.invalid) return

    const formData: ProfileDTO = {
      firstName: this.form.value.firstName as string,
      lastName: this.form.value.lastName as string, 
      phoneNumber: this.form.value.phoneNumber as string,
      role: this.form.value.role as string,
    };

    const profileId = this.profile()?.id as string;
    console.log(`Profile id is: ${profileId}`)
    await firstValueFrom(this.profileService.updateEmployeeProfile(formData, profileId))
    console.log(`Profile id after method is: ${profileId}`)
    this.router.navigate(['/profile/', profileId]);

  }


  
}
