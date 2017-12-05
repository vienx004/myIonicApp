import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { ArmorPage } from './armor/armor';
import { WeaponPage } from './weapon/weapon';

@Component({
  selector: 'page-vault',
  templateUrl: 'vault.html'
})
export class VaultPage {
  constructor (private navCtrl: NavController) {}

  onLoadWeapon() {
    this.navCtrl.push(WeaponPage);
    //this.navCtrl.push(WeaponPage, {weaponName: name, weaponDescription: description, weaponAttack: attack});
  }

  onLoadArmor() {
    this.navCtrl.push(ArmorPage);
  }
}