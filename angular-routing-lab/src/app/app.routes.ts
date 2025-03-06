import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './about/profile/profile.component';
import { AdminGuard } from './admin/admin.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redirect default to Home
  { path: 'home', component: HomeComponent },
  { 
    path: 'about', component: AboutComponent, 
    children: [
      { path: 'profile', component: ProfileComponent }  // Nested route
    ] 
  },
  { path: 'contact', component: ContactComponent },
  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), 
    canActivate: [AdminGuard]  // Protect admin route with a guard
  }
];
