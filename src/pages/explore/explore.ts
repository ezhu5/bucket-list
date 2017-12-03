import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CubaPage } from '../cuba/cuba';

@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})
export class ExplorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  toCuba() {
  	this.navCtrl.push(CubaPage);
  }

}
