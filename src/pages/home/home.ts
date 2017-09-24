import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalStorage } from './../../app/LocalStorage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  localStorageBrowser = new LocalStorage();
  timeToWakeUp:Array<TimeCalc> = new Array();
  numberOfIntervals: number = this.localStorageBrowser.getProperty("numberOfIntervals");
  timeToSleep:number = this.localStorageBrowser.getProperty("timeToSleep");
  intervalLength = this.localStorageBrowser.getProperty("intervalLength");
  constructor(public navCtrl: NavController) {
    this.performCalculations();
  }
  getCurrentTime(){
    return new TimeCalc(new Date(),0);
  }
 
  getMilsFromMin(time:number){
    return time*60*1000;
  }
  performCalculations(){
    this.timeToWakeUp = [];
    var counter:number = new Date().getTime();
    counter+=this.getMilsFromMin(this.timeToSleep);
    for(let i=1;i<=this.numberOfIntervals;i++){
      var dateGenerator:Date = new Date();
      counter+=this.getMilsFromMin(this.intervalLength);
      dateGenerator.setTime(counter);
      this.timeToWakeUp.push(new TimeCalc(dateGenerator, i*this.intervalLength));
    }
  }

}
class TimeCalc{
  date:Date;
  addedMinutes:number;
  constructor(date:Date, addedMinutes:number){
    this.date=date;
    this.addedMinutes=addedMinutes;
  }
  toString(){
    return "Pluebaaaaa"+this.date.toString();
  }
  getTime(){
    const date = this.date;
    const hours:string=this.numberToStringFormatted(date.getHours());
    const minutes:string =this.numberToStringFormatted(date.getMinutes());
    return `${hours}:${minutes}`;
  }
  getIntervalMinutes(){
    return this.addedMinutes;
  }
  getIntervalHours(){
    const minutes=this.numberToStringFormatted(this.addedMinutes%60);
    const hours=this.numberToStringFormatted(~~(this.addedMinutes/60));
    if(minutes == "00"){
      return `${hours}h`
    }
    return `${hours}h ${minutes}m`
  }
  numberToStringFormatted(number:number){
    if(number<10){
      return `0${number}`
    }
    return `${number}`
  }
}
