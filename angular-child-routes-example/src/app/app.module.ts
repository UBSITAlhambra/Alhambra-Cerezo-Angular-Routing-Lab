import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildOneComponent } from './parent/child-one/child-one.component';
import { ChildTwoComponent } from './parent/child-two/child-two.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent, 
    ChildOneComponent, 
    ChildTwoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterOutlet, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }