
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Facebook } from '@ionic-native/facebook';
import { Platform } from 'ionic-angular';
import { ToastController } from "ionic-angular";

import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor(public afAuth: AngularFireAuth, public platform: Platform, public fb: Facebook, public toast: ToastController) {
  }

  signInWithFacebook() {
  /*  if (this.platform.is('cordova')) {
       return this.fb.login(['email', 'public_profile'])
        .then(res => {
            const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
            console.log(facebookCredential);
            return firebase.auth().signInWithCredential(facebookCredential);        
      })
      .catch(err => {
        let errorAuthToast =this.toast.create({
          message : `Facebook Native Error ${err}`,
          showCloseButton: true,
          duration: 30000
        });
        errorAuthToast.present();
      })
    }
    else {
    */
      return this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => console.log(res))
        .catch(err => {
          let errorAuthToast =this.toast.create({
          message : `Facebook Web Auth Error ${err}`,
          showCloseButton: true,
          duration: 30000
        });
        errorAuthToast.present();
        })
    }

    //}
} 