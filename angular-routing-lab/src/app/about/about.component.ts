import { Component,  OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-about',
  standalone: true,  
  imports: [CommonModule, RouterModule], 
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    console.log("About Component Loaded");
    this.cdRef.detectChanges(); 
  }
}
