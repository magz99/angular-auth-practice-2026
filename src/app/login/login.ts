import { Component, inject, signal } from '@angular/core';
import { email, form, FormField, required } from '@angular/forms/signals';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  imports: [],
})
export class LoginComponent {
  private readonly auth = inject(AuthService);

  loginModel = signal<LoginData>({
    email: '',
    password: '',
  });

  // simple login form that takes the model we defined
  loginForm = form(this.loginModel);

  // login form with validation and state
  loginForm2 = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email, { message: 'Email is required' });
    required(schemaPath.password, { message: 'Password is required' });
    email(schemaPath.email, { message: 'Enter a valid email address' });
  });

  handleLogin() {
    this.auth.loginWithRedirect();
  }
}
