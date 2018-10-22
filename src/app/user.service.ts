import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class UsersService {
    constructor(private http: HttpClient) {}

    configUrl = 'http://localhost:3000/users';

    /*
    getUsers() {
        return this.http.get(this.configUrl);
    }
    */

    public getUsers(url: string): Observable <any> {
      return this.http.get(url);
    }

    public getMyBlog(username, password): Observable<any> {
      const body = {grant_type: 'password', username: username, password: password};
      const myHeaders = new HttpHeaders().set('Authorization', 'Basic ' + btoa('auth:auth'));
            myHeaders.set('Content-Type', 'application/x-www-form-urlencoded');

      console.log(body);
      return this.http.post('http://vps1.t2studio.org:8000/authserver/oauth/token', body, {headers: myHeaders});
    }

    /*
    public getMyBlog(username, password): Observable<any> {
      const params = new HttpParams().set('username', username).set('password', password);
      return this.http.get('...apiurl...', { params });
    }

    // Для публикации:
    public getMyBlog(username, password): Observable<any> {
      const body = { username, password };
      return this.http.post('...apiurl...', body);
    }

    //Лучший способ получить запросы - отправить токен в заголовки:
    public getMyBlog(token) {
      const headers = new HttpHeaders().set('Authorization', token);
      return this.http.get('...apiurl...', { headers });
    }
  */

  addUser(userLogin: string) {
    const data = {
      name: userLogin
    };
    return this.http.post('http://localhost:3000/users', data);
  }
}
