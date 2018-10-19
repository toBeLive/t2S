import {NgModule} from '@angular/core';
import {PersonComponent} from './person/person.component';
import {Routes, RouterModule} from '@angular/router';
import {MainWinComponent} from './main-win/main-win.component';
import {UserPlanComponent} from './user-plan/user-plan.component';

const appRoutes: Routes = [
    {path: '', component: MainWinComponent},
    {path: 'Plan', component: UserPlanComponent},
    {path: 'Person', component: PersonComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModules { }
