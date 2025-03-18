import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-parent',
  imports: [RouterModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  pageTitle = 'Angular 19 Data Binding';
  currentTime = new Date();
  name = ''; 
  email = ''; 
  number = ''; 
  address = ''; 
  course = ''; 
}
