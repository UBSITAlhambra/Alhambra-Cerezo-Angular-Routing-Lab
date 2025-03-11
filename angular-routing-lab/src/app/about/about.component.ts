import { Component,  OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
=======
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-about',
  standalone: true,  
  imports: [CommonModule, RouterModule], 
>>>>>>> b12f61b142c8582c18daa2a5e7e313f03a388403
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    console.log("About Component Loaded");
    this.cdRef.detectChanges(); 
  }
}
