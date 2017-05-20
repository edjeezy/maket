import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ToastController } from 'ionic-angular';
const options: CameraOptions = {
  quality: 50,
  destinationType: 1,
  mediaType: 0
};

@Component({
  selector: 'page-sellpage',
  templateUrl: 'sellpage.html',
})
export class SellpagePage {
  titre: string = '';
  description: string = '';
  etat: string = '';
  negociable: boolean = true;
  prix:  number = 0;
  livraison: string = '';
  constructor(public toastCtrl: ToastController, public navCtrl: NavController, 
              public navParams: NavParams, public camera: Camera) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SellpagePage');
  }

  addPhoto() {
    this.camera.getPicture(options).then((imageData) => {
    // TODO : Upload to Firebase
    console.log(imageData);
}, (err) => {
 // Handle error
 alert('Erreur lors de la prise de la photo')
});

  }
  hideUploading = 1000000000;
  Uploading() {
    
    let toast = this.toastCtrl.create({
      message: 'Chargement en cours',
      duration: this.hideUploading
    });
    toast.present();
  }

}
