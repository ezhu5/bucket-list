import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import {User} from "../../models/user";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  splash = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
       setTimeout(() => {
        this.splash = false;
       }, 4000);
    
     }

  segueToMTabs() {
    this.navCtrl.push(TabsPage);
  }

  segueToReg() {
    this.navCtrl.push(RegisterPage);
  }

}