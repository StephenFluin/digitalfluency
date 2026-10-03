import { Component } from '@angular/core';
import { COMPANY } from '../company';

@Component({
  selector: 'app-privacy',
  template: `
    <div class="container legal">
      <h1>Privacy Policy</h1>
      <p><em>Effective {{ company.effectiveDate }}</em></p>

      <p>
        This Privacy Policy describes how {{ company.legalName }} ("we", "us") collects, uses, and
        shares information when you use {{ company.domain }} and the applications we operate,
        including FriendlAI and Money (together, the "Services").
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li><strong>Account information</strong> such as your name and email address.</li>
        <li><strong>Content you provide</strong> while using the Services.</li>
        <li>
          <strong>Payment information</strong>, which is collected and processed by our payment
          processor, Stripe. We do not store full payment card numbers.
        </li>
        <li><strong>Usage data</strong> such as device, browser, and log information.</li>
      </ul>

      <h2>How We Use Information</h2>
      <p>
        We use information to provide, maintain, and improve the Services; process payments;
        communicate with you about your account; prevent fraud and abuse; and comply with legal
        obligations.
      </p>

      <h2>How We Share Information</h2>
      <p>
        We do not sell your personal information. We share information only with service
        providers that help us operate the Services (such as hosting, payment processing, and
        AI model providers), when required by law, or in connection with a business transfer.
      </p>

      <h2>Data Retention and Security</h2>
      <p>
        We retain information for as long as your account is active or as needed to provide the
        Services and meet legal obligations. We use reasonable safeguards to protect your
        information, though no method of transmission or storage is completely secure.
      </p>

      <h2>Your Choices</h2>
      <p>
        You may access, update, or request deletion of your account information at any time by
        contacting us at <a [href]="'mailto:' + company.email">{{ company.email }}</a>.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy from time to time. Changes take effect when posted on this
        page.
      </p>
    </div>
  `,
})
export default class Privacy {
  protected readonly company = COMPANY;
}
