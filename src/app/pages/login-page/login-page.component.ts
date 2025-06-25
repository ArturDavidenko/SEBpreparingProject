import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-login-page',
  imports: [RouterModule, ReactiveFormsModule, TranslocoModule],
  standalone: true,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})

export class LoginPageComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  isPasswordVisible = signal<Boolean>(false)

  form = new FormGroup({
    employeerLastName: new FormControl(null, Validators.required),
    employeerPassword: new FormControl(null, Validators.required)
  }) 

  onSubmit() {
  
    if (this.form.valid){
      console.log(this.form.value)
      //@ts-ignore
      this.authService.loginAndSetCookie(this.form.value).subscribe({
        next: (response) => {
          console.log("Success", response);
          this.router.navigate(['']);
        },
        error: (error) => {
          console.log("Error", error);
        }
        
      });
    }
    
  }
}
