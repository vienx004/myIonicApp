import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from "ionic-angular";


@Component({
    selector: 'page-weapon-detail',
    templateUrl: 'weapon-detail.html'
})

export class WeaponDetailPage {
    name: string;
    description: string;
    attack: number;

    constructor (
        private navParams: NavParams,
        private navCtrl: NavController
        ) {}

    ngOnInit() {
        this.name = this.navParams.get('weaponName');
        this.description = this.navParams.get('weaponDescription');
        this.attack = this.navParams.get('weaponAttack');
    }

    gotoHome(){
        this.navCtrl.popToRoot();
    }
}