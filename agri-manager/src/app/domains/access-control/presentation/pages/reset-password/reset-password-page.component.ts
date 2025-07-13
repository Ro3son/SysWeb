import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './reset-password-page.component.html',
  styleUrl: './reset-password-page.component.css'
})
export class ResetPasswordComponent {

  public h1: string = 'Redefinir senha';

  resetPasswordForm = new FormGroup({
    userEmail: new FormControl('', [Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
  });

  public onSubmit() {
    window.localStorage.setItem('Senha redefinida', JSON.stringify(this.resetPasswordForm.value));
    window.location.reload();
  }

}
