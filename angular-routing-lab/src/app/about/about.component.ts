import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ Import RouterModule

@Component({
  selector: 'app-about',
  standalone: true,  // ✅ Ensure it's standalone
  imports: [CommonModule, RouterModule], // ✅ Add RouterModule here
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent { }
