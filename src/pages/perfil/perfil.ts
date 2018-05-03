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
  
    this.usuariosProvider.getStorage("usuario").then(usuario => {
      if(usuario){
        this.usuario = usuario; //primeiramente pega os dados locais
        this.usuariosProvider.showUsuario(usuario).subscribe(res => {
          this.usuario = res; //verifica os dados no servidor e atualiza as informações
        }, erro => {
          console.log("Erro: " + erro.message); 
        });
      }else{
        this.cancelar(); //se entrar no else é pq não tem o usuário salvo/persistido, nesse caso ele executa o cancelar para voltar na tela inicial, pois não quero que entre no perfil
      }
    });//otimizando a página de perfil pra ver se o usuário está logado


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
