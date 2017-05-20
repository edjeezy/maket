import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, NavOptions } from 'ionic-angular';
import { HomePage } from "../pages/home/home";
@Component({
    selector: 'fab-nav',
    template: `  
    <ion-fab bottom right edge >
        <button ion-fab  color="dark"><ion-icon name="add"></ion-icon></button>
        <ion-fab-list>
        <button ion-fab color="primary"><ion-icon name="aperture"></ion-icon></button>
        <button ion-fab color="primary"><ion-icon name="search"></ion-icon></button>
        <button ion-fab color="primary"><ion-icon name="cart"></ion-icon></button>
        </ion-fab-list>
    </ion-fab>`
})

export class FabComponent implements OnInit {
    constructor(public nav: NavController, public params: NavParams) { }

    ngOnInit() { 
} 
    opts: NavOptions = {
        isNavRoot: true
    }
    navigate() {
        this.nav.push(HomePage, this.opts);
    }
}