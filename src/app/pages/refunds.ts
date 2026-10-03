import { Component } from '@angular/core';
import { COMPANY } from '../company';

@Component({
  selector: 'app-refunds',
  template: `
    <div class="container legal">
      <h1>Refund and Cancellation Policy</h1>
      <p><em>Effective {{ company.effectiveDate }}</em></p>

      <h2>Cancellation</h2>
      <p>
        You may cancel a subscription at any time from within the application or by contacting
        us. After cancellation you keep access until the end of the current billing period, and
        you will not be charged again.
      </p>

      <h2>Refunds</h2>
      <p>
        If you are not satisfied, you may request a full refund within 14 days of your initial
        purchase or most recent renewal. Refund requests after 14 days are reviewed case by case.
        Approved refunds are issued to the original payment method and typically appear within
        5&ndash;10 business days.
      </p>

      <h2>Billing Errors</h2>
      <p>
        If you believe you were charged in error, contact us and we will investigate and correct
        any mistake promptly.
      </p>

      <h2>How to Request a Refund</h2>
      <p>
        Email <a [href]="'mailto:' + company.email">{{ company.email }}</a> with your account email
        address and the date and amount of the charge.
      </p>
    </div>
  `,
})
export default class Refunds {
  protected readonly company = COMPANY;
}
