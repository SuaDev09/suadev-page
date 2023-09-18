//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';
import { routes } from './app/app-routing.routes';

// Routes
export class Main {}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom([BrowserModule]),
    provideRouter(routes),
    provideAnimations(),
  ],
}).catch((err) => console.error(err));
