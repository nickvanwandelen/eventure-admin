import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Quests } from './quests';

@NgModule({
  declarations: [
    Quests,
  ],
  imports: [
    IonicPageModule.forChild(Quests),
  ],
  exports: [
    Quests
  ]
})
export class QuestsModule {}
