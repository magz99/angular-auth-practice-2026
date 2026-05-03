import {Component, inject} from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import {AsyncPipe, JsonPipe} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  imports: [
    AsyncPipe,
    JsonPipe
  ]
})
export class HomeComponent {
  protected readonly auth = inject(AuthService);

  readonly userInfo$ = this.auth.user$;
  protected readonly window = window;
}
