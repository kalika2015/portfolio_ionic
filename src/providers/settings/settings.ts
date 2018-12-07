//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class SettingsProvider {

  private theme: BehaviorSubject<String>;
  constructor(/*public http: HttpClient*/) {
    //console.log('Hello SettingsProvider Provider');
    this.theme = new BehaviorSubject('dark-theme');
  }

  setActiveTheme(val){
    this.theme.next(val);
  }

  getActiveTheme(){
    return this.theme.asObservable();
  }

}
