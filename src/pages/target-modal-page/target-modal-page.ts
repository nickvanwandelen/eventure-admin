import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController, Platform} from 'ionic-angular';

/**
 * Generated class for the TargetModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-target-modal-page',
  templateUrl: 'target-modal-page.html',
})
export class TargetModalPage {

  target_id;
  target_beacon_id;
  target_name;
  target_avatar;
  target_info;
  target_type;

  editing: boolean;

  constructor(public platform: Platform, public navParams: NavParams, public viewCtrl: ViewController) {
    this.editing = false;

    this.target_id = this.navParams.get('_id');
    this.target_beacon_id = this.navParams.get('beaconID');
    this.target_name = this.navParams.get('name');
    this.target_avatar = this.navParams.get('avatar');
    this.target_info = this.navParams.get('info');
    this.target_type = this.navParams.get('type');
  }

  handleEdit(){
    this.editing = !this.editing;

    if(this.editing == false){
      this.target_type =
      console.log(this.target_type);
    }
    console.log("Edit");
  }

  handleDelete(){
    console.log("Delete");
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TargetModalPage');
  }

}
