import { Component, OnInit } from '@angular/core';
import { FileItem } from "../../models/file-item";
import { CargaImagenesService } from 'src/app/services/carga-imagenes.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styles: [
  ]
})
export class CargaComponent implements OnInit {
archivos :FileItem[]=[];
estaSobreElemento=false;
  constructor(public cargaImagenesService:CargaImagenesService) { }

  ngOnInit(): void {
  }

 cargarImagenes(){
    this.cargaImagenesService.cargarImagenesFirebase(this.archivos);
 
 }

 limpiarArchivos(){
   this.archivos=[];
 }

}
