import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { environment } from 'src/environments/environment';
import { SidebarService } from '../../services/sidebar.service';
const base_url = environment.base_url;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
  public imgUrl='';
  public nombre='';

  constructor(public sideBarService: SidebarService, private usuarioService: UsuarioService) {
  //  this.menuItems = sideBarService.menu;
    this.imgUrl= this.recuperaImagen();
    this.nombre=this.recuperaNombre();
  //console.log(this.imgUrl);
  }

  ngOnInit(): void {
  }
  recuperaImagen() {
    if(this.usuarioService.usuario.img){
    if (this.usuarioService.usuario.img.includes('https')) {
      return this.usuarioService.usuario.img;
    }
  }
    if (this.usuarioService.usuario.img) {
      return `${base_url}/upload/usuarios/${this.usuarioService.usuario.img}`;
    } else {
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
}
