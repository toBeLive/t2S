import { Component } from '@angular/core';
import { GlobalsVariable } from '../globals';
import { UsersService } from '../user.service';

import { SnackBarComponent} from '../snack-bar/snack-bar';

@Component({
  selector: 'app-reg-profile',
  templateUrl: './reg-profile.component.html',
  styleUrls: ['./reg-profile.component.css']
})

export class RegProfileComponent {

  constructor(private usersService: UsersService,
              public globalVar: GlobalsVariable,
              public snackBar: SnackBarComponent) {
  }

newPassword: string;
  newLogin: string;
  testLogin: string;
  testPassword: string;
  private stringBody: string;
  private config: { heroesUrl: string; textfile: string };
  responseStatus: number;

  regUser() {
    this.testLogin = this.newLogin;
    this.testPassword = this.newPassword;
    console.log('newLogin = ' + this.newLogin);
    console.log('newPassword = ' + this.newPassword);

    this.usersService.regNewUser(this.newLogin, this.newPassword)
      .subscribe(data => {
        this.responseStatus = data.status;
        console.log(data.status); // 200
        console.log(data); // undefined
        console.log(data.statusText); // OK
        this.showSnackBar();
      },
      err => {
        console.log(err.status); // 401
        console.log(err.error.error); // unauthorized
        this.responseStatus = err.status;
        this.showSnackBar();
      });
  }

  showSnackBar () {
    if (this.responseStatus !== 200) {
      console.log('Все плохо');
      this.snackBar.openSnackBar();
    } else {
      console.log('Все супер');
      this.snackBar.openSnackBar();
    }
  }
}

