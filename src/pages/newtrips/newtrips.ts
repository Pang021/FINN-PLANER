import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { Page1 } from '../page1/page1';
import { TripsPage } from '../trip/trip';

/*
  Generated class for the Newtrips page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-newtrips',
  templateUrl: 'newtrips.html'
  
})
export class NewtripsPage {
  myDate:String = new Date().toISOString();
  page1 = Page1;
  trip = TripsPage;
  constructor(public navCtrl: NavController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewtripsPage');
  }

}
