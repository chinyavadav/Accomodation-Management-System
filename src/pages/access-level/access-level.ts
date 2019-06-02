import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { GlobalProvider } from '../../providers/global/global';

/**
 * Generated class for the AccessLevelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-access-level',
  templateUrl: 'access-level.html',
})
export class AccessLevelPage {

  constructor(public global:GlobalProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccessLevelPage');
  }

  push(page){
  	if(page!=null){
      this.global.accessLevel=page;
  		this.navCtrl.setRoot(HomePage);
  	}
  }

}
