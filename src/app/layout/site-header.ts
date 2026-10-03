import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { COMPANY } from '../company';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="container bar">
        <a class="logo" routerLink="/">{{ company.shortName }}</a>
        <nav aria-label="Primary">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" ariaCurrentWhenActive="page">Home</a>
          <a routerLink="/products" routerLinkActive="active" ariaCurrentWhenActive="page">Products</a>
          <a routerLink="/contact" routerLinkActive="active" ariaCurrentWhenActive="page">Contact</a>
        </nav>
      </div>
    </header>
  `,
  styles: `
    .header {
      background: var(--header-background);
      padding: 24px 0;
    }
    .bar {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px 24px;
    }
    .logo {
      color: #fff;
      font-size: 32px;
      font-weight: 700;
      margin-right: auto;
    }
    nav {
      display: flex;
      flex-wrap: wrap;
      gap: 8px 28px;
    }
    nav a {
      color: rgba(255, 255, 255, 0.85);
      font-weight: 400;
      text-transform: uppercase;
    }
    nav a:hover,
    nav a.active {
      color: #fff;
    }
    nav a.active {
      text-decoration: underline;
      text-underline-offset: 6px;
    }
    a:focus-visible {
      outline-color: #7cc4ff;
    }
  `,
})
export class SiteHeader {
  protected readonly company = COMPANY;
}
