import { Component } from '@angular/core';
import { UsersService } from '../user.service';
import { GlobalsVariable } from '../globals';

interface Users {
  name: string;
  id: number;
  username: string;
}

@Component({
  selector: 'app-person',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {

  users: Users[] = [];
  userLogin;
  userPassord;

  constructor(private usersService: UsersService, public globalVar: GlobalsVariable) { }

  loginUsers() {
    if (this.globalVar.globalAccessToken.length > 0) {
      this.globalVar.globalInvisible = true;
      console.log('if true!');
    } else {
      this.usersService.loginUsers(this.userLogin, this.userPassord)
        .subscribe((data) => {
          this.globalVar.globalAccessToken = data.access_token;
          if (this.globalVar.globalAccessToken) {
            console.log(this.globalVar.globalAccessToken);
            this.globalVar.globalInvisible = true;
          }
        });
    }
  }

  getUsersList() {
    this.usersService.usersList(this.globalVar.globalAccessToken)
      .subscribe((users: Users[]) => {
        this.users = users;
        this.globalVar.globalTableUser = !this.globalVar.globalTableUser;
      });
  }
}
