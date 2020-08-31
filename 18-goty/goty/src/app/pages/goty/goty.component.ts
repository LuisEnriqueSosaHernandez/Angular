import { Component, OnInit } from '@angular/core';
import {GameService} from "../../services/game.service";
import { Game } from "../../interfaces/interfaces";

import Swal from 'sweetalert2'

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {
juegos : Game[]=[];
procesando:boolean;
  constructor(private gameServices:GameService) { 
    this.procesando=false;
  }

  ngOnInit(): void {
this.gameServices.getNominados().subscribe(games=>{
  this.juegos=games;
});
  }

  votarJuego(juego:Game){
    this.procesando=true;
    this.gameServices.votarJuego(juego.id).subscribe((resp:{ok:boolean,mensaje:string})=>{
      if(resp.ok){
        Swal.fire('Gracias',resp.mensaje,'success');
        this.procesando=false;
      }else{
        Swal.fire('Opss!',resp.mensaje,'error');
        this.procesando=false;
      }
    });
  }

}
