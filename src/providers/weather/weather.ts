import { Http,Jsonp } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apiKey:string='bd5e378503939ddaee76f12ad7a97608';
  URL='';
  constructor(public http: Http ) {
    this.URL='https://api.darksky.net/forecast/6fd6a4a7ec374785cd7eacb6709410f2'
    console.log('Hello WeatherProvider Provider');
  }

  getWeather(lat:string,long:string){
    console.log('lat,long',lat);
    return this.http.get(this.URL+'/'+lat+','+long).map((res)=>{
      console.log("response in weatherprovider",res);
        return res.json();
    })
    }

  //it is used for search box
 /* search(term:string){  
    let search=new URLSearchParams();
    search.set('action','opensearch');
    search.set('search',term);
    search.set('format','json');
    return this.jsonp.get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK',{search}).toPromise().then(res=>res.json()[1]); 
  }*/
}
