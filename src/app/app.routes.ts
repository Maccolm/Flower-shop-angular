import { Routes } from '@angular/router';

export const routes: Routes = [
	{path: '', loadComponent: () => import('./pages/main/main.component').then(m => m.MainComponent)},
	{path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)},
	{path: 'auth', loadComponent: () => import('./pages/auth/auth.component').then(m=> m.AuthComponent)}
];
