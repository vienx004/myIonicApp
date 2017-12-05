import { WeaponDetailPage } from './weapon-detail/weapon-detail';
import { Component } from '@angular/core';
import { NavController } from "ionic-angular";

@Component({
    selector: 'page-weapon',
    templateUrl: 'weapon.html',
})

export class WeaponPage{

    constructor (
        private navCtrl: NavController
        ) {}

    onGoBack() {
        this.navCtrl.pop();
    }

    onLoadWeaponDetail(name: string, description: string, attack: number) {
        this.navCtrl.push(WeaponDetailPage, {weaponName: name, weaponDescription: description, weaponAttack: attack})
    }

}


//tempalteUrl must be exact and case sensitive