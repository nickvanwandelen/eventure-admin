import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Achievements } from '../achievements/achievements';
import { Dashboard } from '../dashboard/dashboard';
import { Event } from '../event/event';
import {TargetsBeacons} from "../targets-beacons/targets-beacons";
import {Quests} from "../quests/quests";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dashboard:any = Dashboard;
  event: any = Event;
  targets_becaons:any = TargetsBeacons;
  achievements:any = Achievements;
  quests:any = Quests;

  constructor(public navCtrl: NavController) {

  }

}
