import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page1} from'../page1/page1';
import { RegisterPage} from'../register/register';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  page1 = Page1;
  registerPage = RegisterPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    this.navCtrl.setRoot(Page1);
  }
}
