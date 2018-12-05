import { Component } from '@angular/core';
        //이미 내장되어 있는 컨트롤러 
import { NavController, AlertController } from 'ionic-angular';
import * as firebase from "firebase";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
                    //any? java의 generic처리 
  private userName : any;
  private userEmail : any;
  private userId : any;

  constructor(public navCtrl: NavController,
    private alerCtrl : AlertController
    ) {
    this.initPage();
  }

  initPage(){
    var user = firebase.auth().currentUser;
    console.log(user);

    if(user){           //firebase내부 정해진 명
      this.userName = user.displayName;
      this.userEmail = user.email;
      this.userId = user.uid;
    }else{
      console.log('로그인 된 사용자가 없습니다');
    }
  }

  logout(){   //this.가 붙는 건 무조건 생성자 확인! 
                                        //JSON객체 
    let confirm = this.alerCtrl.create({
      title: '로그아웃',
      message : '로그아웃하시겠습니까?',
      buttons : [{                   //배열 안에 json객체 2개 있는 형태
        text:'아니오',
        handler: ()=>{     //function은 error! 람다
          console.log('Logout 취소');
        } 
      },{
        text : '예',
        handler: ()=>{
          console.log('Logout 확인');

          firebase.auth().signOut()
          .then(()=>{     //타입스크립트&람다식
            console.log('로그아웃 실행');
          })
          .catch((error)=>{
            console.log(error)});
        }
      }]      
    });
    confirm.present();


  }


}
