import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  public menu = [];

  cargarMenu(){
    this.menu = JSON.parse( localStorage.getItem('menu')) || [];
  }

 /* menu:any[]=[
    {
      titulo:'Dashboard',
      icono:'mdi mdi-gauge',
      subMenu:[
        {titulo:'Main',url:'/'},
        {titulo:'ProgressBar',url:'progress'},
        {titulo:'Gráficas',url:'grafica1'},
        {titulo:'Promesas',url:'promesas'},
        {titulo:'Rxjs',url:'rxjs'}
      ]
    },
    {
      titulo:'Mantenimiento',
      icono:'mdi mdi-folder-lock-open',
      subMenu:[
        {titulo:'Usuarios',url:'usuarios'},
        {titulo:'Hospitales',url:'hospitales'},
        {titulo:'Medicos',url:'medicos'},
      ]
    }
  ]*/
  
}
