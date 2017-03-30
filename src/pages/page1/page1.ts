import { Component } from '@angular/core';
import { NewtripsPage } from '../newtrips/newtrips';
import { NavController } from 'ionic-angular';
import { TripsPage} from'../trip/trip';
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  newtripsPage = NewtripsPage;
  tripsPage = TripsPage;
  constructor(public navCtrl: NavController) {
    
  }



}
