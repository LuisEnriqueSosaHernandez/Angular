import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { environment } from 'src/environments/environment';
import { UsuarioService } from '../../services/usuario.service';
const base_url=environment.base_url;
declare function customSideBar();
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
public imgUrl='';
public nombre='';
public email;
//public usuario:Usuario;
  constructor(private usuarioService:UsuarioService,
    private router: Router) { 
   // this.imgUrl=usuarioService.usuario.imagenUrl;
    //console.log(usuarioService.usuario.imprimir());
  this.imgUrl= this.recuperaImagen();
  this.nombre=this.recuperaNombre();
  this.email=this.recuperaCorreo();
 //this.usuario=usuarioService.usuario;
 //this.imgUrl=this.usuario.imagenUrl;
 //console.log(this.usuario.imagenUrl);
  }

   recuperaImagen(){
    if(this.usuarioService.usuario.img){
     if(this.usuarioService.usuario.img.includes('https')){
          return this.usuarioService.usuario.img;
     }
    }
     if(this.usuarioService.usuario.img){
      return `${base_url}/upload/usuarios/${this.usuarioService.usuario.img}`;
     }else{
      return `${base_url}/upload/usuarios/no-img`;
    }
  }
  recuperaNombre(){
    if(this.usuarioService.usuario.nombre){
      return this.usuarioService.usuario.nombre;
    }else{
      return 'Sin nombre'
    }
  }
  recuperaCorreo(){
    if(this.usuarioService.usuario.email){
      return this.usuarioService.usuario.email;
    }else{
      return 'Sin email'
    }
  }

  buscar(termino:string){
      //console.log(termino);
      if(termino.length===0){
        //this.router.navigateByUrl('/dashboard');
        return;
      }
      this.router.navigateByUrl(`/dashboard/buscar/${termino}`);
  }

  ngOnInit(): void {
    customSideBar();
  }

  logout(){
    this.usuarioService.logout();
  }

}
