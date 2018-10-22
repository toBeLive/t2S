import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class UsersService {
    constructor(private http: HttpClient) {}

    /*
    public getUsers(url: string): Observable <any> {
      return this.http.get(url);
    }
    */

    public loginUsers(username, password): Observable<any> {
      const body = 'grant_type=password&username=' + username + '&password=' + password;
      const myHeaders = new HttpHeaders({
        'Authorization': 'Basic ' + btoa('auth:auth'),
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      return this.http.post('http://vps1.t2studio.org:8000/authserver/oauth/token', body, {headers: myHeaders});
    }

    public usersList(userToken): Observable<any> {
    const myHeaders = new HttpHeaders({
      'Authorization': 'Bearer ' + userToken,
      'Content-Type': 'application/json'
    });
    return this.http.get('http://vps1.t2studio.org:8000/authserver/people', {headers: myHeaders});
  }

}
