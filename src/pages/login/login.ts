import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LoaderProvider } from '../../providers/loader/loader';
import * as firebase from "firebase";

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
  constructor(public navCtrl: NavController, 
    //private loader: LoaderProvider,
    public navParams: NavParams) {
  }

  //catch
  ionViewDidLoad() {      
    console.log('ionViewDidLoad LoginPage');
  }

  login(){          //promise Pattern 

    //this.loader.show();
    firebase.auth().signInWithEmailAndPassword(this.account.email, this.account.password)
    .then((result)=>{
      console.log(result);
    })

    .catch((error) =>{
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
    });
   //this.loader.hide();
    }

  //signup 페이지로 이동
  signup(){
    this.navCtrl.push(SignupPage);
    }
     
    }