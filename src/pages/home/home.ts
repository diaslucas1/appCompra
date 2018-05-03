import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetalhePage } from '../detalhe/detalhe';

import { ICurso } from '../../interfaces/ICurso';

import { CursosProvider } from '../../providers/cursos/cursos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  lista: ICurso[];

  constructor(public navCtrl: NavController, public cursoProvider: CursosProvider) {
    //this.lista = this.cursoProvider.all();
    
  }

  ionViewDidEnter(){ //executa sempre que a pessoa entrar, ou seja, faz a requisição pro servidor e vai atualizar a lista caso tenha alguma alteração
    this.cursoProvider.allTeste().subscribe(res => {
      this.lista = res;
    }, erro => {
      console.log("Erro: " + erro.message);
    });

    let data:ICurso = {
      "id": 4,
      "titulo":"Curso de Android",
      "descricao":"Aprenda Android na Prática",
      "valor":23.90,
      "valor_txt":"23,90","imagem":"https://digitalscientists.com/wp-content/uploads/2018/03/ionic-logo-landscape-1.png",
      "aulas":[
        {
          "id":1,
          "ordem":1,
          "titulo":"Introdução ao Curso",
          "tempo":"10:00",
          "video":"https://youtube.com/embed/lv_n3sDpXAc"
        },
        {
          "id":2,
          "ordem":2,
          "titulo":"Realizando a Instalação",
          "tempo":"05:00",
          "video":"https://youtube.com/embed/lv_n3sDpXAc"
        }
      ]
    };
    /*
    this.cursoProvider.addTeste(data).subscribe(res => {
      console.log(res);
    }, erro => {
      console.log("Erro: " + erro.message);
    });

    this.cursoProvider.editTeste(data).subscribe(res => {
      console.log(res);
    }, erro => {
      console.log("Erro: " + erro.message);
    });
    

    this.cursoProvider.deleteTeste(data).subscribe(res => {
      console.log(res);
    }, erro => {
      console.log("Erro: " + erro.message);
    });
    

    this.cursoProvider.showTeste(data).subscribe(res => {
      console.log(res);
    }, erro => {
      console.log("Erro: " + erro.message);
    });
    */


  }

  abreDetalhe(item) {
    this.navCtrl.push(DetalhePage, {dados:item});
  }

}
