import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ResetEmailPage } from '../pages/resetemail/resetemail';
import { ManagerPage } from '../pages/manager/manager';

import { NewsPage } from '../pages/news/news';
import { CategoryPage } from '../pages/category/category';
import { UserPage } from '../pages/user/user';

import * as firebase from "firebase";

  // Initialize Firebase
var config = {
    apiKey: "AIzaSyAuddNkV0DMa5RFAulehT0H3zr88v_Dx8E",
    authDomain: "itbank181204.firebaseapp.com",
    databaseURL: "https://itbank181204.firebaseio.com",
    projectId: "itbank181204",
    storageBucket: "itbank181204.appspot.com",
    messagingSenderId: "237151816070"
};
  
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        // User is signed in.
        this.rootPage = HomePage;
      } else {
        // User is signed out.
        this.rootPage = LoginPage;
      }
    }); 

  }
}
