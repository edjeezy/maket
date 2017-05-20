import { Component, OnInit } from '@angular/core';

@Component({

    selector: 'fab-loading',
    template : `
        <ion-fab bottom right edge >
        <button ion-fab  color="dark"><ion-icon name="refresh"></ion-icon></button>
        </ion-fab>
    `
})

export class FabLoadingComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}