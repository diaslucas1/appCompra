import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

import { IUsuario } from '../../interfaces/IUsuario';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  usuario:IUsuario = {name:'',email:'',password:''};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  cancelar(){ //método para cancelar, voltar para página home
    this.navCtrl.setRoot(HomePage);
  }

  addUsuario(){
    console.log(this.usuario);
  }

}
