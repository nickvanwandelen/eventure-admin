import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Achievements } from './achievements';

@NgModule({
  declarations: [
    Achievements,
  ],
  imports: [
    IonicPageModule.forChild(Achievements),
  ],
  exports: [
    Achievements
  ]
})
export class AchievementsModule {}
