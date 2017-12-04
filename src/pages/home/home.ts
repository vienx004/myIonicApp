import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VaultPage } from '../vault/vault';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotoVault(){
    this.navCtrl.push(VaultPage);
  }

}
