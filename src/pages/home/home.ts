import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { TabsPage } from '../tabs/tabs';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  location={
    latitude:'',
    longitude:''
  }
  weather:any;
  constructor(public navCtrl: NavController, private weatherService:WeatherProvider, public navParams:NavParams,private storageService:Storage) {
    
    
  }
  ionViewWillEnter(){
    this.storageService.get('location').then(val=>{
      if(val!=null){
        console.log(val);
      }else{
        this.location.latitude='42.3601';
        this.location.longitude='-71.0589';
      }
    });
  }
  ionViewDidEnter(){
    this.weatherService.getWeather(this.location.latitude,this.location.longitude).subscribe((val)=>{
      this.weather=val;
      console.log("weather details",val);
    });
  }
  search(){
    console.log("search function worked")
    this.navCtrl.push(TabsPage);
  }


  //it is used for search on the event key up using wikipedia api and by using jsonp
 /* searchTerm(term:string){
    this.weatherService.search(term)
    .then(terms=>
      //console.log(terms)
    {
      this.item=terms;
    })
  }*/
}
