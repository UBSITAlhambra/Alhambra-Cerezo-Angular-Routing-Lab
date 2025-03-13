import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildOneComponent } from './parent/child-one/child-one.component';
import { ChildTwoComponent } from './parent/child-two/child-two.component';
import { AdminGuard } from './admin/admin.guard';


export const routes: Routes = [
{
path: 'parent',component: ParentComponent,

children: [
{path: 'child-one',component: ChildOneComponent},
{path: 'child-two',component: ChildTwoComponent
}]},

{path: 'admin', component: ParentComponent, canActivate: [AdminGuard],
children: [{path: 'dashboard', component: ChildOneComponent },
{path: 'users', component: ChildTwoComponent}
]},

{path: '',redirectTo: '/parent',pathMatch: 'full'}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }