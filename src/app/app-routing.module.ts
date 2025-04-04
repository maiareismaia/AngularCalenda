import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  // More routes will be added in the future
  { path: '**', redirectTo: '', pathMatch: 'full' } // Catch-all route for 404
];
