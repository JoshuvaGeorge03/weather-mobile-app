import { Component } from '@angular/core';
import { NavController, NavParams ,ToastController} from 'ionic-angular';
import {HomePage} from '../home/home';
import {Storage} from '@ionic/storage';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  latitude:string='';
  longitude:string=''
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private storageService:Storage,private toastService:ToastController) {
    console.log("view loaded")
    this.storageService.get('location').then(val=>{
      if(val!=null){
        console.log("val",val);
      }else{
        this.latitude='8.7139126';
        this.longitude='77.7566523';
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }
  save(){
    let location={
      latitude:this.latitude,
      longitude:this.longitude
    }
    this.storageService.set('location',location);
    console.log("save item",location);
  }
  presentToast(){
    let toast=this.toastService.create({
      message:'the search is completed successfully',
      duration: 2000,
      position:'bottom',
      showCloseButton: true,
      closeButtonText: 'done'
    })
    toast.present();
  }
}
