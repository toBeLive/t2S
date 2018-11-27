import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { MainWinComponent } from './main-win/main-win.component';
import { ProfileComponent } from './profile/profile.component';
import { UserPlanComponent } from './user-plan/user-plan.component';
import { RegProfileComponent} from './reg-profile/reg-profile.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './user.service';
import { AppRoutingModules } from './app-routing.modules';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgbdCarouselBasic } from './main-win/carousel/carousel-basic.component';


@NgModule({
  declarations: [
    AppComponent,
    MainWinComponent,
    ProfileComponent,
    UserPlanComponent,
    RegProfileComponent,
    NgbdCarouselBasic
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
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
