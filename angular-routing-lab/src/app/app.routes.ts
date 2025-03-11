import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './users/profile/profile.component';
import { AdminGuard } from './admin/admin.guard';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: 'profile', component: ProfileComponent }
  ]},
  { path: 'contact', component: ContactComponent },
  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), 
    canActivate: [AdminGuard]  
  }
];
