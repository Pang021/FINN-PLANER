import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { NewtripsPage } from '../pages/newtrips/newtrips';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TripsPage } from '../pages/trip/trip';
import { TodoPage } from '../pages/todo/todo';
import { PackagePage} from'../pages/package/package';
import { NotePage} from'../pages/note/note';
import { HelpPage} from'../pages/help/help';
import { AboutPage} from'../pages/about/about';
import { LoginPage} from'../pages/login/login';
import { RegisterPage} from'../pages/register/register';
import { NewitemPage} from'../pages/newitem/newitem';
@NgModule({
  declarations: [
    MyApp,
    Page1,
    NewtripsPage,
    TripsPage,
    TodoPage,
    PackagePage,
    NotePage,
    HelpPage,
    AboutPage,
    LoginPage,
    RegisterPage,
    NewitemPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    NewtripsPage,
    TripsPage,
    TodoPage, 
    PackagePage,
    NotePage,
    HelpPage,
    AboutPage,
    LoginPage,
    RegisterPage,
    NewitemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
