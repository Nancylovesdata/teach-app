import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetComponent } from './meet/meet.component';
import { SecondPageComponent } from './second-page/second-page.component';
// Define route
const routes: Routes = [{path:"", component: MeetComponent}, {path:"secondPage", component: SecondPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
