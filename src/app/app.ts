import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteFooter } from './layout/site-footer';
import { SiteHeader } from './layout/site-header';

@Component({
  imports: [RouterOutlet, SiteHeader, SiteFooter],
  selector: 'app-root',
  template: `
    <a class="skip" href="#main">Skip to main content</a>
    <app-site-header />
    <main id="main" tabindex="-1">
      <router-outlet />
    </main>
    <app-site-footer />
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    main {
      flex: 1;
    }
    main:focus {
      outline: none;
    }
    .skip {
      position: absolute;
      left: -9999px;
      background: #fff;
      color: #005a8c;
      padding: 8px 16px;
    }
    .skip:focus {
      left: 16px;
      top: 16px;
      z-index: 10;
    }
  `,
})
export class App {}
