import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { ArmorDetailPage } from './armor-detail/armor-detail';

@Component({
    selector: 'page-armor',
    templateUrl: 'armor.html'
})

export class ArmorPage{

    constructor(private navCtrl: NavController) {}
    
    onLoadArmorDetail(name: string, description: string, defense: number){
        this.navCtrl.push(ArmorDetailPage, {armorName: name, armorDescription: description, armorDefense: defense})
    }
}