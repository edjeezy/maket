import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
   produits
  constructor(public navCtrl: NavController, public afDB : AngularFireDatabase) {
    this.produits = this.afDB.list('/produits').subscribe(result => result);
    console.log(this.produits);
  }

}
