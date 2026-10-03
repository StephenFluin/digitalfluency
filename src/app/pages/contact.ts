import { Component } from '@angular/core';
import { COMPANY } from '../company';

@Component({
  selector: 'app-contact',
  template: `
    <section class="band">
      <div class="container">
        <h1>Contact</h1>
        <p>We're happy to help with product questions, billing, and support requests.</p>
      </div>
    </section>

    <div class="container">
      <h2>Get in Touch</h2>
      <div class="card">
        <p class="name">{{ company.legalName }}</p>
        <p>Email: <a [href]="'mailto:' + company.email">{{ company.email }}</a></p>
        @if (company.address) {
          <p>Mail: {{ company.address }}</p>
        }
        <p>We aim to respond to all inquiries within two business days.</p>
      </div>
      <p>
        For billing questions, please include the email address associated with your account and
        the date and amount of the charge.
      </p>
    </div>
  `,
  styles: `
    .name {
      font-weight: 700;
      margin-top: 0;
    }
  `,
})
export default class Contact {
  protected readonly company = COMPANY;
}
