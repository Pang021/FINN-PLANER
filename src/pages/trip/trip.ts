import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TodoPage} from'../todo/todo';
import { PackagePage} from'../package/package';
import { NotePage} from'../note/note';
/*
  Generated class for the ListTrips page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-trip',
  templateUrl: 'trip.html'
})
export class TripsPage {
  todoPage = TodoPage;
  packagePage = PackagePage;
  notePage = NotePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripsPage');
  }

}
