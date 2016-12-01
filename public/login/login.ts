
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../common/headers';

@Component({
  selector: 'login',
  templateUrl: 'public/login/login.html',
  styleUrls: ['public/login/login.css']
})

export class Login {
  constructor(public router: Router, public http: Http) {
  }

  login(event, username, password) {
    event.preventDefault();
    let body = JSON.stringify({ username, password });
    this.http.post('/login', body, { headers: contentHeaders })
      .subscribe(
        response => {
          this.router.navigate(['home']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }
}
