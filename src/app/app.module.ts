import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ResetEmailPage } from '../pages/resetemail/resetemail';
import { LoaderProvider } from '../providers/loader/loader';
import { ManagerPage } from '../pages/manager/manager';


import { CategoryPage } from '../pages/category/category';
import { UserPage } from '../pages/user/user';
import { NewsPage } from '../pages/news/news';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ResetEmailPage,
    ManagerPage,
    UserPage,
    NewsPage,
    CategoryPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    ResetEmailPage,
    ManagerPage,
    UserPage,
    NewsPage,
    CategoryPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoaderProvider
  ]
})
export class AppModule {}
