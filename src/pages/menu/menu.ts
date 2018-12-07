import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from "@ionic-native/native-page-transitions";

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
export interface PageInterface{
  title: string;
  pageName: string;
  icon: string;
}

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage = "AccueilPage";

  @ViewChild(Nav) nav: Nav;

  pages: PageInterface[] = [
    {title: 'accueil', pageName: 'AccueilPage', icon: 'home'},
    {title: 'competence', pageName: 'CompetencePage', icon: 'analytics'},
    {title: 'portfolio', pageName: 'PortfolioPage', icon: 'logo-buffer'},
    {title: 'contact', pageName: 'ContactPage', icon: 'contacts'},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativePageTransitions: NativePageTransitions) {
  }

  openPage(page: PageInterface){
    let option: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
    }
    this.nativePageTransitions.curl(option);

    let params = {};

    if (page.pageName){
      params = { pageIndex: page.pageName };
    }
    if (page.pageName != undefined){
      this.nav.setRoot(page.pageName, params);
    }
  }

  isActive(page: PageInterface){
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName){
      return 'primary';
    }
  }

}
