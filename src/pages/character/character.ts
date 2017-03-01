import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-character',
  templateUrl: 'character.html'
})
export class CharacterPage {
  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController) {
  }

  saveActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Save character to...',
      buttons: [
        {
          text: 'Local',
          handler: () => {
            console.log('local clicked');
          }
        },{
          text: 'OneDrive',
          handler: () => {
            console.log('onedrive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

  loadActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Load character from...',
      buttons: [
        {
          text: 'Local',
          handler: () => {
            console.log('local clicked');
          }
        },{
          text: 'OneDrive',
          handler: () => {
            console.log('onedrive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
