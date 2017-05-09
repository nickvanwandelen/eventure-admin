import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Achievements } from '../pages/achievements/achievements';
import { Dashboard} from '../pages/dashboard/dashboard';
import { Event } from '../pages/event/event';
import {TargetsBeacons} from "../pages/targets-beacons/targets-beacons";
import { Quests } from "../pages/quests/quests";
import {TargetModalPage} from "../pages/target-modal-page/target-modal-page";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Achievements,
    Dashboard,
    Event,
    TargetsBeacons,
    TargetModalPage,
    Quests
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Achievements,
    Dashboard,
    Event,
    TargetsBeacons,
    TargetModalPage,
    Quests
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
