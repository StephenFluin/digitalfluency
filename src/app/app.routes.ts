import { Routes } from '@angular/router';

const suffix = ' | Digital Fluency LLC';

export const routes: Routes = [
  { path: '', title: 'Digital Fluency LLC', loadComponent: () => import('./pages/home') },
  { path: 'products', title: 'Products' + suffix, loadComponent: () => import('./pages/products') },
  { path: 'contact', title: 'Contact' + suffix, loadComponent: () => import('./pages/contact') },
  { path: 'privacy', title: 'Privacy Policy' + suffix, loadComponent: () => import('./pages/privacy') },
  { path: 'terms', title: 'Terms of Service' + suffix, loadComponent: () => import('./pages/terms') },
  { path: 'refunds', title: 'Refund Policy' + suffix, loadComponent: () => import('./pages/refunds') },
  { path: '**', redirectTo: '' },
];
