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
  visibil: boolean;

  constructor(private usersService: UsersService) { }

  public loginUsers() {
    if (!window.globalAccessToken == '') {
      /*SharedService.updateVisibility();*/
      window.visibility = true;
      visibil = window.visibility;
    } else {
      this.usersService.loginUsers(this.userLogin, this.userPassord)
        .subscribe((data) => {
          window.globalAccessToken = data.access_token;
          if (window.globalAccessToken) {
            console.log(window.globalAccessToken);
            /*SharedService.updateVisibility();*/
            window.visibility = true;
            visibil = window.visibility;
          }
        });
      //this.userPassord = '';
      //this.userLogin = '';
    }
  }

  public getUsersList() {
    this.usersService.usersList(window.globalAccessToken)
      .subscribe((users: Users[]) => {
        this.users = users;
        window.TableUser = !window.TableUser;
      });
  }
}
