import {NgModule} from '@angular/core';
import {ProfileComponent} from './profile/profile.component';
import {Routes, RouterModule} from '@angular/router';
import {MainWinComponent} from './main-win/main-win.component';
import {UserPlanComponent} from './user-plan/user-plan.component';
import {RegProfileComponent} from './reg-profile/reg-profile.component';

const appRoutes: Routes = [
    {path: '', component: MainWinComponent},
    {path: 'plan', component: UserPlanComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'reg-profile', component: RegProfileComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModules { }
