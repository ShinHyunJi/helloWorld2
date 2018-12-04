import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as firebase from "firebase";
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private account : any ={
    email : '',
    password : ''
  };

  //생성자  instance:type
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //catch
  ionViewDidLoad() {      
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
  }

  //signup 페이지로 이동
  signup(){
    this.navCtrl.push(SignupPage);
  }

}
