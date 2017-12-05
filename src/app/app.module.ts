import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { VaultPage } from '../pages/vault/vault';
import { WeaponPage } from '../pages/vault/weapon/weapon';
import { ArmorPage } from '../pages/vault/armor/armor';
import { WeaponDetailPage } from '../pages/vault/weapon/weapon-detail/weapon-detail';
import { ArmorDetailPage } from '../pages/vault/armor/armor-detail/armor-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    VaultPage,
    WeaponPage,
    ArmorPage,
    WeaponDetailPage,
    ArmorDetailPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    VaultPage,
    WeaponPage,
    ArmorPage,
    WeaponDetailPage,
    ArmorDetailPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

//remember to add ',' at the end of the lists, code did not run without