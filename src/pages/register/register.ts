import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { TutorialPage } from '../tutorial/tutorial';
import { User } from '../../models/user';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  constructor(private aFauth : AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  async segueToTut(user: User) {
    try{
    const result = await this.aFauth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
    this.navCtrl.push(TutorialPage);
    } catch (e) {
      console.error(e);
    }
    
  }

}