import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url='https://identitytoolkit.googleapis.com/v1/accounts:'
  private API_KEY='AIzaSyDd_HmExbUQ6zxo3zLYx2jZAVNaKzISamI';
  usertToken:string;
  // Crear nuevo usuario
//https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
// login con usuario
// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
  constructor(private http:HttpClient) { 
    this.leerToken();
  }

  logout(){
    localStorage.removeItem('token');
  }
  login(usuario:UsuarioModel){
    const authData={
      ...usuario,
       returnSecureToken:true
 
     };
     return this.http.post(
      `${ this.url }signInWithPassword?key=${ this.API_KEY }`,
     authData
     ).pipe(
      map(resp=>{
       
          this.guardarToken(resp['idToken']);
          return resp;
      })
    );
 }

  nuevoUsuario(usuario:UsuarioModel){
    const authData={
     ...usuario,
      returnSecureToken:true

    };
    return this.http.post(
       `${ this.url }signUp?key=${ this.API_KEY }`,
      authData
      ).pipe(
        map(resp=>{
        
            this.guardarToken(resp['idToken']);
            return resp;
        })
      );
  }
  private guardarToken(idToken:string){
        this.usertToken=idToken;
        localStorage.setItem('token',idToken);
        let hoy=new Date();
        hoy.setSeconds(3600);
        localStorage.setItem('expira',hoy.getTime().toString());
  }
  private leerToken(){
    if(localStorage.getItem('token')){
      this.usertToken=localStorage.getItem('token');
    }else{
      this.usertToken='';
    }
    return this.usertToken;
  }
  estaAutenticado():boolean{
    if(this.usertToken.length<2){
      return false;
    }
    const expira=Number(localStorage.getItem('expira'));
    const expiracion=new Date();
    expiracion.setTime(expira);

    if(expiracion>new Date()){
      return true
    }else{
      return false;
    }
  }
}
