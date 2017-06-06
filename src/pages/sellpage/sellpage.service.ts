import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ToastController } from 'ionic-angular';
import { AlertController } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
@Injectable()
export class SellPageService {
  img;
  storage ;
  storageRef;
  imgName;
  imgUploaded: number = 0;
  downloadUrl: string; 
    constructor(public toastCtrl : ToastController, public alertCtrl : AlertController,
                public _DB : AngularFireDatabase
    ) {
            this.storage = firebase.storage();
            this.storageRef = this.storage.ref();
           
     }


  UploadImage(imgbase64){
    this.imgName = new Date().getTime()
    let imgFolder = this.storageRef.child(`images/img-${this.imgName}.jpg`);
    let toast = this.toastCtrl.create({
      message: 'Chargement...',
      duration: 30000
    });
    toast.present()
    imgFolder.putString(imgbase64, firebase.storage.StringFormat.DATA_URL, { contentType: 'image/jpeg' })
      .then(snapshot => {
        toast.dismiss();
        this.imgUploaded += 1;
        this.downloadUrl =  snapshot.downloadURL;
            let toastD = this.toastCtrl.create({
              message: 'Image Ajoutée',
              duration: 2000
            });
            toastD.present();
    })
      .catch(error => alert(error));

  }

  onlyOne (){
    let rejectUpload  = this.toastCtrl.create({
      message: 'Une seule image autorisée...',
      duration: 300,
      showCloseButton: true,
      closeButtonText: 'OK',
    });
    rejectUpload.present();
  }

  uploadProductToFirebase(prod) {
    const produits = this._DB.list('/produits');
    produits.push(prod).then(res => {
      console.log(res);
      let alert = this.alertCtrl.create({
        title: 'En ligne!',
        subTitle: 'Votre produit a été mis en ligne avec succés ',
        buttons: ['OK']
      });
      alert.present();
    })
  }

}