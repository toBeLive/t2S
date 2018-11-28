import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class UsersService {
    constructor(private http: HttpClient) {}

    urlStart = 'http://vps1.t2studio.org:8000/authserver/v1';
    urlToken = this.urlStart.substring(0, this.urlStart.length - 3);
    /*
    public getUsers(url: string): Observable <any> {
      return this.http.get(url);
    }
    */

    // получение токена
    public loginUsers(username, password): Observable<any> {
      const body = 'grant_type=password&username=' + username + '&password=' + password;
      const myHeaders = new HttpHeaders({
        'Authorization': 'Basic ' + btoa('auth:auth'),
        'Content-Type': 'application/x-www-form-urlencoded'
      });
      return this.http.post(this.urlToken + '/oauth/token', body, {headers: myHeaders});
    }

    // получение списка пользователей
    public usersList(userToken): Observable<any> {
      const myHeaders = new HttpHeaders({
        'Authorization': 'Bearer ' + userToken,
        'Content-Type': 'application/json'
      });
      return this.http.get(this.urlStart + '/people', {headers: myHeaders});
    }

    // получение данных
    public getInBD(userToken, urlLink): Observable<any> {
      const myHeaders = new HttpHeaders({
        'Authorization': 'Bearer ' + userToken,
        'Content-Type': 'application/json'
      });
      return this.http.get(this.urlStart + urlLink, {headers: myHeaders});
    }

    // добавление данных
    public postInBD(userToken, urlLink, postBody): Observable<any> {
      const myHeaders = new HttpHeaders({
        'Authorization': 'Bearer ' + userToken,
        'Content-Type': 'application/json'
      });
      return this.http.post(this.urlStart + urlLink, postBody, {headers: myHeaders});
    }
}
