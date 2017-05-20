import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ToastController } from 'ionic-angular';
import * as firebase from 'firebase/app';
const options: CameraOptions = {
  quality: 50,
  destinationType: 0,
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
     this.Uploading();
     this.UploadImage(imageData);


    console.log(imageData);
}, (err) => {
 // Handle error
 alert('Erreur lors de la prise de la photo')
});

  }

  hideUploading = 1000000000;
  UploadImage(imgbase64){
    let storage = firebase.storage();
    let storageRef = storage.ref()
    let imgFolder = storageRef.child('images');
    let toast = this.toastCtrl.create({
      message: 'Chargement en cours',
      duration: this.hideUploading
    });
    toast.present();
    imgFolder.putString(imgbase64, 'base64')
      .then(complete => toast.dismiss())
      .catch(error => alert(error));

  }
  Uploading() {  

  }

}
