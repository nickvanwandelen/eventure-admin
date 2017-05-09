import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TargetModalPage } from './target-modal-page';

@NgModule({
  declarations: [
    TargetModalPage,
  ],
  imports: [
    IonicPageModule.forChild(TargetModalPage),
  ],
  exports: [
    TargetModalPage
  ]
})
export class TargetModalPageModule {}
