import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  /* добавить клиента
  // http://vps1.t2studio.org:8000/authserver/swagger-ui.html#/person-controller/addPersonUsingPOST
  fetch('http://vps1.t2studio.org:8000/authserver/v1/people', {
  	method: 'POST',
	  headers: {
		  'Content-Type': 'application/json',
		  'Authorization': 'Bearer ' + 'b206691d-8bae-4120-87e3-2e6e80a7f105'
	  },
	  body: JSON.stringify({
		  lastName:'Denisenko'
	  })
  })
  .then(console.log)
  */

  /* просмотреть клиента
  fetch('/authserver/client/7', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + 'b5e22077-ed97-442c-9817-0916298169c4'
     }
   })
   .then(result => result.json()
   .then(console.log))
  */

}
