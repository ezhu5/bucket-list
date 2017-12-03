import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';

import { CubaPage } from '../cuba/cuba';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,  public navParams: NavParams) {

  }

  logout() {
    this.navCtrl.push(LoginPage);
  }

  toCuba() {
  	this.navCtrl.push(CubaPage);
  }

}
