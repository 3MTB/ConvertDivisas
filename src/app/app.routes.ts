import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'aboutCurrency',
    title: 'About Currency',
    loadComponent: () => import('./Components/about-currency/about-currency.page').then(m => m.AboutCurrencyPage)
  },
  {
    path: 'home',
    title: 'Home',
    loadComponent: () => import('./Components/home/home.page').then(m => m.HomePage)
  },
  {
    path: '',
    redirectTo: 'error',
    pathMatch: 'full',
  },
  {
    path: 'mood-offline',
    loadComponent: () => import('./Components/mood-offline/mood-offline.page').then( m => m.MoodOfflinePage)
  },
  {
    path: 'error',
    loadComponent: () => import('./Components/error/error.page').then( m => m.ErrorPage)
  },

];
