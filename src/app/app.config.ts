import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';

// Load environment variables from .env
const envDomain = import.meta.env['VITE_AUTH0_DOMAIN'] || 'dev-zocefh73301cbjg7.ca.auth0.com';
const envClientId = import.meta.env['VITE_AUTH0_CLIENT_ID'] || 'pN0N7QkKe5rnzK8cDowHkG6n56av0xLa';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideAuth0({
      domain: envDomain,
      clientId: envClientId,
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
};
