import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
    private loader: LoaderProvider,
    private alertCtrl: AlertController,
    public navParams: NavParams) {
  }

  //catch
  ionViewDidLoad() {      
    console.log('ionViewDidLoad LoginPage');
  }

  login(){          //promise Pattern 

    this.loader.show();
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
   this.loader.hide();
    }

  //signup 페이지로 이동
  signup(){
    this.navCtrl.push(SignupPage);
    }



    //email재설정
  resetEmail(){
    let alert = this.alertCtrl.create({
      title: '비밀번호 변경',
      message: "패스워드를 재설정 링크를 받을 이메일 주소를 입력하세요",
      inputs: [
        {
          name: 'email',
          placeholder: 'E-MAIL'
        }
      ],
      buttons: [
        {
          text: '취소',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '확인',
          handler: data => {
            var auth = firebase.auth();
            var emailAddress = "hjshin612@gmail.com";
            auth.sendPasswordResetEmail(emailAddress)
            .then(()=> {
                //email sent
              let alert = this.alertCtrl.create({
                title:'비밀번호 변경 이메일',
                subTitle:'재설정 메일 전송. 확인 바람',
                buttons:['확인']
              });
              alert.present();
            }).catch((error)=> {
                //an error happend.
            });
          }
        }
      ]
    });
    alert.present();
  }
}


     
