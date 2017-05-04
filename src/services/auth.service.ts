import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
   userName: string;
   loggedIn: boolean;
   url = 'http://localhost:8000/auth';

   constructor(private http: Http) {
      this.userName = '';
      this.loggedIn = false;
   }
   
   login(userInfo) {
      let url = `${this.url}/login`;
      let iJon = JSON.stringify(userInfo);

      return this.http.post(url, iJon, {
         headers: new Headers({
            'Content-Type':'application/json'
         })
      })
      .map(res => res.text())
      .map(res => {
         if (res=="error" || res=="nofound"){
            this.loggedIn = false;
         } else {
            localStorage.setItem('token', res);
            this.userName = userInfo.user;
            this.loggedIn = true;
         }
         return this.loggedIn;
      });
   }

   logout(): void {
      localStorage.removeItem('token');
      this.userName = '';
      this.loggedIn = false;
   }

   isLoggedIn() {
      return this.loggedIn;
   }
}