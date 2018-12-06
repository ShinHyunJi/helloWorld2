import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding } from 'ionic-angular';
import * as firebase from "firebase";


/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  private users : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.initPage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  initPage(){
    var usrRef = firebase.database().ref('User/');
    usrRef.on('value', (items : any )=>{
      this.users = [];
      if(items.val()){
        items.forEach(item => {
          this.users.push({
            name : item.val().name,
            email : item.val().email,
            password : item.val().password,
            date : item.val().date,
            id : item.val().id

          })
        });

      }else{
        console.log('사용자 목록 조회 실패');
      }

    });
  }
}
