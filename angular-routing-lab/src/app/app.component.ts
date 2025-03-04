import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './about/profile/profile.component';


@Component({
  selector: 'app-root',
<<<<<<< HEAD
<<<<<<< HEAD
  imports: [RouterOutlet, HomeComponent, AboutComponent, ContactComponent, ProfileComponent ],
=======
>>>>>>> 225d4dc (updated components)
=======
  imports: [RouterOutlet, HomeComponent, AboutComponent, ContactComponent, ProfileComponent],
>>>>>>> 0218aab6b0d2e6b94ef0c49a0afdc800a92d6618
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-routing-lab';
}
