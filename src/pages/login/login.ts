import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Facebook } from '@ionic-native/facebook';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,
              public platform: Platform, public fb: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
 
  signInWithFacebook() {
    if (this.platform.is('cordova')) {
      return this.fb.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        console.log(facebookCredential);
        return firebase.auth().signInWithCredential(facebookCredential);
        
      })
    }
    else {
      return this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => console.log(res));
    }

}
}