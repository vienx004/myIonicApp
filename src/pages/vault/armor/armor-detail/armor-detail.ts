import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

@Component({
    selector: 'page-armor-detail',
    templateUrl: 'armor-detail.html'
})

export class ArmorDetailPage implements OnInit{
    name: string;
    description: string;
    defense: string;

    constructor(
        private navParams: NavParams,
        private navCtrl: NavController) {}

    ngOnInit(){
        this.name = this.navParams.get("armorName");
        this.description = this.navParams.get("armorDescription");
        this.defense = this.navParams.get("armorDefense");
    }

    gotoHome(){
        this.navCtrl.popToRoot();
    }
}