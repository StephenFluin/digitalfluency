import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY } from '../company';

@Component({
  selector: 'app-terms',
  imports: [RouterLink],
  template: `
    <div class="container legal">
      <h1>Terms of Service</h1>
      <p><em>Effective {{ company.effectiveDate }}</em></p>

      <p>
        These Terms of Service govern your use of {{ company.domain }} and the applications
        operated by {{ company.legalName }}, including FriendlAI and Money (the "Services"). By
        using the Services you agree to these terms.
      </p>

      <h2>Accounts</h2>
      <p>
        You are responsible for maintaining the security of your account and for all activity
        that occurs under it. You must provide accurate information when creating an account.
      </p>

      <h2>Subscriptions and Payment</h2>
      <p>
        Some features require a paid subscription. Prices are shown before purchase.
        Subscriptions renew automatically at the end of each billing period until cancelled. You
        may cancel at any time, and cancellation takes effect at the end of the current billing
        period. Refunds are handled according to our <a routerLink="/refunds">Refund Policy</a>.
      </p>

      <h2>Acceptable Use</h2>
      <p>
        You agree not to misuse the Services, including by attempting to gain unauthorized
        access, interfering with their operation, or using them for unlawful purposes.
      </p>

      <h2>No Professional Advice</h2>
      <p>
        The Services are informational tools. Nothing in the Services constitutes financial,
        legal, tax, or other professional advice.
      </p>

      <h2>Disclaimers and Limitation of Liability</h2>
      <p>
        The Services are provided "as is" without warranties of any kind. To the maximum extent
        permitted by law, {{ company.legalName }} is not liable for indirect, incidental, or
        consequential damages, and our total liability is limited to the amount you paid us in
        the twelve months preceding the claim.
      </p>

      <h2>Termination</h2>
      <p>
        We may suspend or terminate access to the Services for violation of these terms. You may
        stop using the Services at any time.
      </p>

      <h2>Changes and Contact</h2>
      <p>
        We may update these terms from time to time. Questions can be sent to
        <a [href]="'mailto:' + company.email">{{ company.email }}</a>.
      </p>
    </div>
  `,
})
export default class Terms {
  protected readonly company = COMPANY;
}
