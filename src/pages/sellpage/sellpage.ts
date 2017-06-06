import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ToastController } from 'ionic-angular';
import { SellPageService } from "./sellpage.service";

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
  img;
  options: CameraOptions = {
    quality: 40,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    saveToPhotoAlbum: true
  };
  constructor(  public toastCtrl: ToastController, public navCtrl: NavController, 
                public navParams: NavParams, public camera: Camera,
                public sellservice: SellPageService) {
  
                }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SellpagePage');
  }

  addPhoto() {
    if (this.sellservice.imgUploaded === 0) {
          this.camera.getPicture(this.options).then((imageData) => {
          // TODO : Upload to Firebase
          this.img = "data:image/jpeg;base64," + imageData;
          this.sellservice.UploadImage(this.img);
          }, (err) => {
          // Handle error
          alert('Erreur lors de la prise de la photo')
          });

    } else {
          this.sellservice.onlyOne();
    }

  }

  pushProduct() {
    let timestamp = new Date().getTime();
    let produit = {
      "titre" : this.titre,
      "description": this.description,
      "etat": this.etat,
      "negociable": this.negociable,
      "prix": this.prix,
      "livraison": this.livraison,
      "imageUrl": this.sellservice.downloadUrl,
      "timestamp": timestamp,
      // TODO : Add user data
    }

    this.sellservice.uploadProductToFirebase(produit);
  }


}
