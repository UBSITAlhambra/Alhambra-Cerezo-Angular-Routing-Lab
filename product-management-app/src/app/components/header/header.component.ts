import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header', 
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { 
  title = 'Product Management';
  isDarkTheme = false; 
  currentPage = 'Home';

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme', this.isDarkTheme);
}
}