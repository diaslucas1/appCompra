import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from '../../interfaces/IUsuario';

/*
  Generated class for the UsuariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuariosProvider {

  url:string = 'http://localhost:3000/';
  headers:any;

  constructor(public http: HttpClient) {
    console.log('Hello UsuariosProvider Provider');
    //this.headers = {"headers": {"authorization": "Bearer "}};
  }

  addUsuario(data:IUsuario){
    return this.http.post<IUsuario>(this.url +'usuarios',data);
  }

  


}
