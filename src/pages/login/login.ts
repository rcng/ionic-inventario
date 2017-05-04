import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user: string;
  pass: string;
  isLogged: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth:AuthService) {}

  Signup() {
    let f = {user: this.user, pass: this.pass};
    this.auth.login(f)
      .subscribe(
        rs => this.isLogged = rs,
        er => console.log(er),
        () => {
          if (this.isLogged){
            this.navCtrl.setRoot(TabsPage)
            .then(data => console.log(data),
            error => console.log(error));
          } else {
            console.log('Acceso denegado');
          }
        }
      )
  }
}
