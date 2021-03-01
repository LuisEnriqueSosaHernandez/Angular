import { Component, OnDestroy, OnInit } from '@angular/core';
import { Usuario } from '../../../models/usuario.model';
import { UsuarioService } from '../../../services/usuario.service';
import { environment } from 'src/environments/environment';
import { BusquedasService } from "../../../services/busquedas.service";
import Swal from 'sweetalert2';
import { ModalImagenService } from '../../../services/modal-imagen.service';
import { delay } from 'rxjs/operators';
import { Subscription } from 'rxjs';
const base_url=environment.base_url;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit,OnDestroy {
  
public totalUsuarios:number=0;
public usuarios:Usuario[]=[];
public usuariosTemp:Usuario[]=[];
public imgSubs:Subscription;
public desde:number=0;
public cargando:boolean=true;
  constructor(private usuarioService:UsuarioService,
    private busquedasService:BusquedasService,
    private modalImagenService:ModalImagenService) { }
  ngOnDestroy(): void {
    this.imgSubs.unsubscribe();
  }

  ngOnInit(): void {
   this.cargarUsuarios();
   this.imgSubs= this.modalImagenService.nuevaImagen.pipe(
     delay(100)
   ).subscribe(img=>{
     this.cargarUsuarios()
    });
  }

  cargarUsuarios(){
    this.cargando=true;
    this.usuarioService.cargarUsuarios(this.desde)
    .subscribe(({total,usuarios})=>{
      this.totalUsuarios=total;
      this.usuarios=usuarios;
      this.usuariosTemp=usuarios;
      this.cargando=false;
    });
  }

  cambiarPagina(valor:number){
        this.desde+=valor;
        if(this.desde<0){
          this.desde=0;
        }else if(this.desde>=this.totalUsuarios){
          this.desde-=valor;
        }

        this.cargarUsuarios();
  }
  recuperaImagen(usuario:Usuario){
    // /upload/usuarios/no-image
    if(!usuario.img){
      return `${base_url}/upload/usuarios/no-img`; 
    }else if(usuario.img.includes('https')){
      return usuario.img;
    }else if(usuario.img){
      return `${base_url}/upload/usuarios/${usuario.img}`;
    }else{
      return `${base_url}/upload/usuarios/no-img`;
    }
 }

 buscar(termino:string){
   if(termino.length===0){
     this.usuarios=this.usuariosTemp;
     return;
   }
this.busquedasService.buscar('usuarios',termino)
.subscribe(resultados=>{
  this.usuarios=resultados as Usuario[];
});
 }

 eliminarUsuario(usuario:Usuario){

  if(usuario.uid===this.usuarioService.uid){
    Swal.fire('Error','No puede borrarse a si mismo','error');
    return;
  }

  Swal.fire({
    title: 'Borrar usuario?',
    text: `Esta a punto de borrar a ${usuario.nombre}`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Si, borrarlo!'
  }).then((result) => {
    if (result.isConfirmed) {
     this.usuarioService.eliminarUsuario(usuario).subscribe(resp=>{
      this.cargarUsuarios();
       Swal.fire('Usuario borrado',
       `${usuario.nombre} fue eliminado correctamente`,
       'success');
      
     })
    }
  })
 }

 cambiarRole(usuario:Usuario){
  this.usuarioService.guardarUsuario(usuario).subscribe(resp=>{
    
  })
 }

 abrirModal(usuario:Usuario){
  this.modalImagenService.abrirModal('usuarios',usuario.uid,usuario.img);
 }

}
