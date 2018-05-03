import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

import { IUsuario } from '../../interfaces/IUsuario';

import { UsuariosProvider } from '../../providers/usuarios/usuarios';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  usuario:IUsuario = {name:'',email:'',password:''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuariosProvider:UsuariosProvider) {
  }

  ionViewDidLoad() {
    let usuario = {
      "name": "lucas",
      "email": "lucas@g",
      "password": "1234",
      "id": 1
    };

    this.usuariosProvider.showUsuario(usuario).subscribe(res => {
      this.usuario = res;
    }, erro => {
      console.log("Erro: " + erro.message);
    });

  }

  cancelar(){ //método para cancelar, voltar para página home
    this.navCtrl.setRoot(HomePage);
  }

  editarUsuario(){
    this.usuariosProvider.editUsuario(this.usuario).subscribe(res => {
      this.usuario = res;
    }, erro => {
      console.log("Erro: " + erro.message);
    });
  }
}
