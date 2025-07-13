import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupComponent {

  public h1: string = 'Preencha os campos para criar uma conta';

  signupForm = new FormGroup({
    name: new FormControl('', [Validators.minLength(6), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(5), Validators.required]),
    jobtitle: new FormControl('', [Validators.minLength(6), Validators.required]),
  });

  onSubmit() {
    console.warn(this.signupForm.value);
  }

}
