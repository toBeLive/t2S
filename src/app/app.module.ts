import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainWinComponent } from './main-win/main-win.component';
import { PersonComponent } from './person/person.component';
import { UserPlanComponent } from './user-plan/user-plan.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { UsersService } from './user.service';
import { AppRoutingModules } from './app-routing.modules';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselNavigation } from "./carousel-navigation";


@NgModule({
  declarations: [
    AppComponent,
    MainWinComponent,
    PersonComponent,
    UserPlanComponent,
    NgbdCarouselNavigation
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModules,
    NgbModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
