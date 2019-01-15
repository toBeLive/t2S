import { Component } from '@angular/core';
import { UsersService } from '../user.service';
import { GlobalsVariable } from '../globals';

@Component({
  selector: 'app-user-plan',
  templateUrl: './user-plan.component.html',
  styleUrls: ['./user-plan.component.css']
})

export class UserPlanComponent {

  constructor(private usersService: UsersService, public globalVar: GlobalsVariable) { }

  putEmployeeController() {
    this.usersService.putInBD(this.globalVar.globalAccessToken, '/employees/' + this.globalVar.globalCurrentEmployeeID)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
