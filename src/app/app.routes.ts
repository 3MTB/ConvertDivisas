import { Routes } from '@angular/router';

export const routes: Routes = [


  {
    path: 'main',
    children: [
      {
        path: '',
        loadComponent: () => import('@Components/main/main.page').then(m => m.MainPage)
      },
     
    ]
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
];
