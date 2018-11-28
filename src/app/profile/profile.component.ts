import { Component } from '@angular/core';
import { UsersService } from '../user.service';
import { GlobalsVariable } from '../globals';

interface Users {
  name: string;
  id: number;
  username: string;
}

/*interface Clients {
  creationDate: Date;
  deleted: boolean;
  firstName: string;
  id: number;
  info: string;
  patronymicName: string;
  secondName: string;
}

interface customerType {
  deleted: boolean;
  description: string;
  id: number;
  name: string;
}*/

@Component({
  selector: 'app-person',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {

  users: Users[] = [];
  customers;
  clients;
  userLogin;
  userPassord;
  clientID;

  testBodyCustomers = JSON.stringify({
    'creationDate': '2018-11-28T18:06:30.863Z',
    'customerType': {
      'deleted': false,
      'description': 'customerType description M1',
      'id': 0,
      'name': 'customerType name M1'
    },
    'deleted': false,
    'firstName': 'Maks1',
    'id': 3,
    'info': 'info M1',
    'patronymicName': 'patronymicName M1',
    'secondName': 'secondName M1'
  });

  testBodyClients = JSON.stringify({lastName:'Max-'});

  constructor(private usersService: UsersService, public globalVar: GlobalsVariable) { }

/*  postBDData(postLink, outBody) {
    this.usersService.postInBD(this.globalVar.globalAccessToken, postLink, outBody)
      .subscribe((data) => {
        console.log(data);
        return data;
      });
  }

  getBDData(getLink) {
    return this.usersService.getInBD(this.globalVar.globalAccessToken, getLink)
      .subscribe((data) => {
        console.log('getBDData - ' + data);
      });
  }*/

  loginUsers() {
    if (this.globalVar.globalAccessToken.length > 0) {
      this.globalVar.globalInvisible = true;
      this.globalVar.globalProfilName = 'Профиль';
      console.log('if true!');
    } else {
      this.usersService.loginUsers(this.userLogin, this.userPassord)
        .subscribe((data) => {
          this.globalVar.globalAccessToken = data.access_token;
          if (this.globalVar.globalAccessToken) {
            console.log(this.globalVar.globalAccessToken);
            this.globalVar.globalInvisible = true;
            this.globalVar.globalProfilName = 'Профиль';
          }
        });
    }
  }

/*  getUsersList() {
    this.usersService.usersList(this.globalVar.globalAccessToken)
      .subscribe((users: Users[]) => {
        this.users = users;
        this.globalVar.globalTableUser = true;
      });
  }*/

  getUsersList() {
    this.usersService.getInBD(this.globalVar.globalAccessToken, '/people')
      .subscribe((users: Users[]) => {
        this.users = users;
        this.globalVar.globalTableUser = true;
      });
  }

  getCustomersList() {
    this.usersService.getInBD(this.globalVar.globalAccessToken, '/customers')
      .subscribe((data) => {
        this.customers = data;
        this.globalVar.globalTableCustomers = true;
        console.log(this.customers);
      });
  }

  postCustomersList() {
    this.usersService.postInBD(this.globalVar.globalAccessToken, '/customers', this.testBodyCustomers)
      .subscribe((data) => {
        this.customers = data;
        this.globalVar.globalTableCustomers = true;
        console.log(this.customers);
      });
  }

  getClientsList() {
    this.usersService.getInBD(this.globalVar.globalAccessToken, '/clients/' + this.clientID)
      .subscribe((data) => {
        this.clients = data;
        this.globalVar.globalTableClient = true;
        console.log(this.clients);
      });
  }

  postClientsList() {
    this.usersService.postInBD(this.globalVar.globalAccessToken, '/clients', this.testBodyClients)
      .subscribe((data) => {
        this.clients = data;
        this.globalVar.globalTableClient = true;
        console.log(this.clients);
      });
  }
}
