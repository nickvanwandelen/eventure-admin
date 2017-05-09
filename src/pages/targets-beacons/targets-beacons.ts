import { Component } from '@angular/core';
import {IonicPage, NavParams, ModalController} from 'ionic-angular';
import {TargetModalPage} from "../target-modal-page/target-modal-page";

/**
 * Generated class for the TargetsBeacons page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-targets-beacons',
  templateUrl: 'targets-beacons.html',
})
export class TargetsBeacons {

  person_targets;
  location_targets;

  constructor(public modalCtrl: ModalController, public navParams: NavParams) {
    this.person_targets = [
      {
        _id: '54',
        beaconID: 'Target1',
        name: 'Alex Jongman',
        avatar: 'assets/images/test_image.jpg',
        info: 'Some random information',
        type: 'person'
      },
      {
        _id: '14',
        beaconID: 'Target2',
        name: 'Nick van Wandelen',
        avatar: 'assets/images/test_image.jpg',
        info: 'Some random information',
        type: 'person'
      }
    ];

    this.location_targets = [
      {
        _id: '96',
        beaconID: 'Target3',
        name: 'Daltonlaan 200',
        avatar: 'assets/images/test_image.jpg',
        info: 'Some random information',
        type: 'location'
      }
    ];
  }

  openPersonModal(target_index){
    console.log("Person Index: " + target_index);
    let targetModal = this.modalCtrl.create(TargetModalPage, this.person_targets[target_index]);
    targetModal.present();
  }

  openLocationModal(target_index){
    console.log("Location Index: " + target_index);
    let targetModal = this.modalCtrl.create(TargetModalPage, this.location_targets[target_index]);
    targetModal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TargetsBeacons');
  }

}




