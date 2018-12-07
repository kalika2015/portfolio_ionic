///<reference path="../../providers/settings/settings.ts"/>
import { SettingsProvider } from './../../providers/settings/settings';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from "@ionic-native/native-page-transitions";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  selectedTheme: String;

  constructor(public navCtrl: NavController, private settings: SettingsProvider, private nativePageTransitions: NativePageTransitions) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

  toggleAppTheme() {
    if (this.selectedTheme == 'dark-theme'){
      this.settings.setActiveTheme('light-theme');
    } else {
      this.settings.setActiveTheme('dark-theme');
    }
  }

  doHome(){
    this.navCtrl.setRoot("MenuPage")
  }

  slidePage() {
    let option: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
    }
    this.nativePageTransitions.slide(option);
    this.navCtrl.setRoot("MenuPage")
  }
  flipPage() {
    let option: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
    }
    this.nativePageTransitions.flip(option);
    this.navCtrl.push("MenuPage")
  }
  fadePage() {
    this.nativePageTransitions.fade(null);
    this.navCtrl.setRoot("MenuPage")
  }
  curlPage() {
    let option: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
    }
    this.nativePageTransitions.curl(option);
    this.navCtrl.setRoot("MenuPage")
  }

}
