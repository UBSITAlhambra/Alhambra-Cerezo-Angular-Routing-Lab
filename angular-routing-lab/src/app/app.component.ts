import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './about/profile/profile.component';


@Component({
  selector: 'app-root',
<<<<<<< HEAD
  imports: [RouterOutlet, HomeComponent, AboutComponent, ContactComponent, ProfileComponent ],
=======
  imports: [RouterOutlet, HomeComponent, AboutComponent, ContactComponent, ProfileComponent],
>>>>>>> 225d4dc (updated components)
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-routing-lab';
}
