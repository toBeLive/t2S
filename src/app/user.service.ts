import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class UsersService {
    constructor(private http: HttpClient) {}

    configUrl = 'http://localhost:3000/users';

    /*
    getUsers() {
        return this.http.get(this.configUrl);
    } */

  public getUsers(url: string): Observable <any> {
    return this.http.get(url);
  }

  addUser(userLogin: string) {
    const data = {
      name: userLogin
    };
    return this.http.post('http://localhost:3000/users', data);
  }
}
