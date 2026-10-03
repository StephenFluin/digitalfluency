/** Single source of truth for the business details shown across the site. */
export const COMPANY = {
  legalName: 'Digital Fluency LLC',
  shortName: 'Digital Fluency',
  domain: 'digitalfluency.net',
  email: 'contact@digitalfluency.net',
  // TODO: Add a business mailing address (Stripe prefers one is listed).
  address: '',
  state: 'TODO: State of formation',
  effectiveDate: 'October 3, 2026',
} as const;

export interface Product {
  name: string;
  url: string;
  summary: string;
  billing: string;
}

export const PRODUCTS: readonly Product[] = [
  {
    name: 'FriendlAI',
    url: 'https://friendlai.xyz',
    summary:
      'A software application delivered over the web that uses artificial intelligence to help customers with everyday communication and productivity tasks.',
    billing:
      'Offered with a free tier and optional paid subscriptions billed monthly or annually. Pricing is displayed in the application before purchase.',
  },
  {
    name: 'Money',
    url: 'https://money.fluin.io',
    summary:
      'A personal finance web application that helps individuals organize, categorize, and understand their own spending and budgets. It does not provide investment advice or move funds.',
    billing:
      'Offered with a free tier and optional paid subscriptions billed monthly or annually. Pricing is displayed in the application before purchase.',
  },
];
