import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { UserPage } from '../user/user';
import { CategoryPage } from '../category/category';

/**
 * Generated class for the ManagerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manager',
  templateUrl: 'manager.html',
})
export class ManagerPage {
  private menus = [
    {
      code : '001',
      title : "News Database"
    },{
      code : '002',
      title : "User Database"
    },{
      code : '003',
      title : "Category Database"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagerPage');
  }
  //
  //ManagerPage
  gotoMenu(menu){
    if(menu.code == "001"){
      this.navCtrl.push(NewsPage);            //여러개 있으니까 push()
    }else if(menu.code == "002"){
      this.navCtrl.push(UserPage); 
    }else{
      this.navCtrl.push(CategoryPage); 
    }

  }



}
