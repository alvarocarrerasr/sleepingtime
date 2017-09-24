import { Component } from '@angular/core';
import { LocalStorage } from './../../app/LocalStorage';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  localStorageBrowser = new LocalStorage();
  intervalLength = this.localStorageBrowser.getProperty("intervalLength");
  timeToSleep = this.localStorageBrowser.getProperty("timeToSleep");
  numberOfIntervals = this.localStorageBrowser.getProperty("numberOfIntervals");
  onNumberOfIntervals(event){
    this.localStorageBrowser.setProperty("numberOfIntervals", event.target.value);
  }
  onTimeToSleep(event){
    this.localStorageBrowser.setProperty("timeToSleep", event.target.value);
  }
  onIntervalLength(event){
    this.localStorageBrowser.setProperty("intervalLength", event.target.value);
  }
}
