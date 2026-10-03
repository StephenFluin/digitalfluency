import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { COMPANY, PRODUCTS } from '../company';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <section class="band" aria-labelledby="hero-title">
      <div class="container">
        <h1 id="hero-title">{{ company.legalName }}</h1>
        <p><strong>Practical software for everyday work and life.</strong></p>
        <p>
          {{ company.legalName }} is a software company that designs, builds, and operates web
          applications for individuals and small teams. We focus on simple, reliable tools that
          solve real problems.
        </p>
      </div>
    </section>

    <div class="container">
      <h2>Our Products</h2>
      <div class="grid">
        @for (product of products; track product.name) {
          <article class="card">
            <h3>{{ product.name }}</h3>
            <p>{{ product.summary }}</p>
            <a [href]="product.url">{{ product.url.replace('https://', '') }}</a>
          </article>
        }
      </div>

      <h2>About Us</h2>
      <p>
        {{ company.legalName }} owns and operates each of the applications listed above. Customer
        accounts, subscriptions, and payments for these products are managed by
        {{ company.legalName }}. Payments are processed securely by our payment provider; we do
        not store full card numbers on our systems.
      </p>
      <p>
        Questions about a product, a subscription, or a charge on your statement?
        <a routerLink="/contact">Contact us</a>.
      </p>
    </div>
  `,
  styles: `
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
    }
    h3 {
      margin-top: 0;
    }
  `,
})
export default class Home {
  protected readonly company = COMPANY;
  protected readonly products = PRODUCTS;
}
