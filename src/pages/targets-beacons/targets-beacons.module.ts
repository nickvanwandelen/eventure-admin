import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TargetsBeacons } from './targets-beacons';

@NgModule({
  declarations: [
    TargetsBeacons,
  ],
  imports: [
    IonicPageModule.forChild(TargetsBeacons),
  ],
  exports: [
    TargetsBeacons
  ]
})
export class TargetsBeaconsModule {}
