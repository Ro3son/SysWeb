import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public h1: string = 'Insira suas credenciais para acessar sua conta';

  loginForm = new FormGroup({
    loginEmail: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
    loginPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  onSubmit() {
    console.warn(this.loginForm.value);
  }

}
