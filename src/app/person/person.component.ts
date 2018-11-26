import { Component } from '@angular/core';
import { UsersService } from '../user.service';

interface Users {
  name: string;
  id: number;
  username: string;
}

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  users: Users[] = [];
  userLogin = '';
  userPassord = '';
  accessToken = '';

  flVisibleReg = false;
  flVisibleUserListButton = true;
  flVisibleUserListTable  = true;
  flActualToken = false;

  constructor(private usersService: UsersService) { }

    loginUsers() {
      this.usersService.loginUsers(this.userLogin, this.userPassord)
        .subscribe((data) => {
          this.accessToken = data.access_token;
          if (this.accessToken) {
            console.log(this.accessToken);
            this.flVisibleUserListButton = false;
            this.flVisibleReg = true;
          }
        });
      this.userPassord = '';
      this.userLogin = '';
    }

    public getUsersList() {
      this.usersService.usersList(this.accessToken)
        .subscribe((users: Users[]) => {
          this.users = users;
          this.flVisibleUserListTable = false;
        });
    }
}
