import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Kalika } from './app.component';
import { HomePage } from '../pages/home/home';
import { SettingsProvider } from '../providers/settings/settings';
import { NativePageTransitions } from "@ionic-native/native-page-transitions";

@NgModule({
  declarations: [
    Kalika,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(Kalika)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Kalika,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingsProvider,
    NativePageTransitions
  ]
})
export class AppModule {}
