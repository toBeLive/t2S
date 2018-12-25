import { Component } from '@angular/core';
import { GlobalsVariable } from '../globals';
import { UsersService } from '../user.service';
import {log} from 'util';

@Component({
  selector: 'app-reg-profile',
  templateUrl: './reg-profile.component.html',
  styleUrls: ['./reg-profile.component.css']
})

export class RegProfileComponent {

newPassword: string;
  newLogin: string;
  testLogin: string;
  testPassword: string;
  private stringBody: string;
  private config: { heroesUrl: string; textfile: string };
  responseStatus: number;

  constructor(private usersService: UsersService, public globalVar: GlobalsVariable) {
  }

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
        this.snackBar();
      },
      err => {
        console.log(err.status); // 401
        console.log(err.error.error); // unauthorized
        this.responseStatus = err.status;
        this.snackBar();
      });
  }

  snackBar () {
    if (this.responseStatus === 200) {
      console.log('Все супер');
    } else {
      console.log('Все плохо');
    }
  }
}
