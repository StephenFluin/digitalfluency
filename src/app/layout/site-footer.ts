import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY } from '../company';

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div class="container cols">
        <div>
          <p class="name">{{ company.legalName }}</p>
          @if (company.address) {
            <p>{{ company.address }}</p>
          }
          <p>
            <a [href]="'mailto:' + company.email">{{ company.email }}</a>
          </p>
        </div>
        <nav aria-label="Legal">
          <a routerLink="/privacy">Privacy Policy</a>
          <a routerLink="/terms">Terms of Service</a>
          <a routerLink="/refunds">Refund Policy</a>
          <a routerLink="/contact">Contact</a>
        </nav>
      </div>
      <div class="container">
        <p class="copy">&copy; {{ year }} {{ company.legalName }}. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      background: var(--footer-background);
      color: var(--footer-text);
      padding: 32px 0 16px;
      margin-top: 48px;
    }
    .cols {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 24px;
    }
    p {
      margin: 0 0 6px;
    }
    .name {
      font-weight: 700;
    }
    nav {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    a {
      color: var(--footer-link);
    }
    a:hover {
      color: #fff;
    }
    .copy {
      margin-top: 24px;
      font-size: 14px;
      color: #c3c9cf;
    }
  `,
})
export class SiteFooter {
  protected readonly company = COMPANY;
  protected readonly year = new Date().getFullYear();
}
