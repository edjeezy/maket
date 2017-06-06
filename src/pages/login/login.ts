import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { ToastController } from 'ionic-angular';
import { NavController } from "ionic-angular";
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit {
  loggedIn;
  constructor(public loginS: LoginService, public toast: ToastController, public navCtrl: NavController,
              public auth: AngularFireAuth) {
  }
  ngOnInit() {
    this.loggedIn = false;
  }
  ionViewDidLoad() {

  }
 
  login() {
    this.loginS.signInWithFacebook().then(res => {
            let authToast = this.toast.create({
            message : res.authResponse.accessToken,
            showCloseButton: true,
            duration: 30000
            });
            authToast.present();
            this.loggedIn = true;
    })
    .catch(err => {
            let errToast = this.toast.create({
            message : `Erreur \n ${err}`,
            showCloseButton: true,
            duration: 30000
            });
            errToast.present();
            this.loggedIn = false;
    })
  }

}