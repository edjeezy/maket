import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { Produits } from "./product.interface";
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  produits;
  
  constructor(public navCtrl: NavController,
              public _DB: AngularFireDatabase) {}

  ngOnInit() {

    this.produits= this._DB.list('/produits', {
      query : {
        limitToLast: 30,
      }
    }).map(array =>  array.reverse()) as FirebaseListObservable<any[]>;

    console.log(this.produits);
  }

  buy(prod) {

  }

  negocier(prod) {

  }
}
