import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  kalan_gun: number;
  update: Function;
  presentAlert: Function;
  tarih: string;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    this.kalan_gun = 28;

    this.update = function(){
      let alert = alertCtrl.create({
        title: 'Tarih Seçimi',
        inputs: [
          {
            name: 'tarih',
            placeholder: 'date',
            type: 'date'
          }
        ],
        subTitle: 'Tarih seçimi yapınız',
        buttons: [
          {
            text: 'Vazgeç',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Kaydet',
            handler: data => {
              this.tarih = data.tarih;
            }
          }
        ]
      });
      
      alert.present();     
    };
  }
}
