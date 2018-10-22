import { Component } from '@angular/core';
import { UsersService } from '../user.service';

interface Users {
  name: string;
  id: number;
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
  configUrl = 'http://localhost:3000/users';

  constructor(private usersService: UsersService) { }

    public loadUsers() {
        this.usersService.getUsers(this.configUrl)
            .subscribe((users: Users[]) => {
              this.users = users;
            });
    }

    addUser() {
      this.usersService.addUser(this.userLogin)
        .subscribe((user: Users) => {
          this.users.push(user);
      });
      this.userLogin = '';
    }

    getMyBlog() {
      this.usersService.getMyBlog(this.userLogin, this.userPassord)
        .subscribe((data: Users) => {
          /*this.users.push(user);*/
          console.log(data);
        });
      this.userPassord = '';
    }
}
