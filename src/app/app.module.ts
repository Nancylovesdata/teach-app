import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeetComponent } from './meet/meet.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { LayoutComponent } from './layout/layout.component';
import { FlexDirective } from './directives/flex.directives';
import { BoxModelDirective } from './directives/boxmodel.directives';
import { ButtonDirective } from './directives/button.directive';
import { InputDirective } from './directives/input.directive';


@NgModule({
  declarations: [
    AppComponent,
    MeetComponent,
    SecondPageComponent,
    LayoutComponent,
    FlexDirective,
    BoxModelDirective,
    ButtonDirective,
    InputDirective
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
