import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './about/profile/profile.component';

const routes: Routes = [
=======
 import { RouterModule, Routes } from '@angular/router';
 import { HomeComponent } from './home/home.component';
 import { AboutComponent } from './about/about.component';
 import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './about/profile/profile.component';


 const routes: Routes = [
>>>>>>> 225d4dc (updated components)
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent, children: [
    { path: 'profile', component: ProfileComponent }
  ]},
  { path: 'contact', component: ContactComponent }
];


<<<<<<< HEAD
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
=======

 @NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }
>>>>>>> 225d4dc (updated components)
