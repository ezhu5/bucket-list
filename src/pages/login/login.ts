import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import {User} from "../../models/user";
import {AngularFireAuth } from 'angularfire2/auth';
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

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
       setTimeout(() => {
        this.splash = false;
       }, 4000);
    
     }

  async segueToMTabs(user: User) {
    try{
    const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    
    if (result){
      this.navCtrl.push(TabsPage);    
     }
    } catch (e) {
      console.error(e);
    }
    // this.navCtrl.push(TabsPage);
  }

  segueToReg() {
    this.navCtrl.push(RegisterPage);
  }

}