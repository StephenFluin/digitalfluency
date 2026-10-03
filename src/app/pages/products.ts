import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY, PRODUCTS } from '../company';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  template: `
    <section class="band">
      <div class="container">
        <h1>Products</h1>
        <p>Software applications owned and operated by {{ company.legalName }}.</p>
      </div>
    </section>

    <div class="container">
      @for (product of products; track product.name) {
        <h2>{{ product.name }}</h2>
        <p>{{ product.summary }}</p>
        <dl>
          <dt>Website</dt>
          <dd><a [href]="product.url">{{ product.url }}</a></dd>
          <dt>Pricing and billing</dt>
          <dd>{{ product.billing }}</dd>
          <dt>Delivery</dt>
          <dd>
            Digital service delivered online. Access is provided immediately after sign-up or
            purchase. No physical goods are shipped.
          </dd>
        </dl>
      }

      <h2>Billing Information</h2>
      <p>
        Charges for these products appear on your statement under {{ company.legalName }} or
        DIGITALFLUENCY. Subscriptions renew automatically until cancelled and can be cancelled at
        any time from within the application or by <a routerLink="/contact">contacting us</a>.
        See our <a routerLink="/refunds">Refund Policy</a> for details.
      </p>
    </div>
  `,
  styles: `
    dt {
      font-weight: 700;
      margin-top: 12px;
    }
    dd {
      margin: 4px 0 0;
    }
  `,
})
export default class Products {
  protected readonly company = COMPANY;
  protected readonly products = PRODUCTS;
}
