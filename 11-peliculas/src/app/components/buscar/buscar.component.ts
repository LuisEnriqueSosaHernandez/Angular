import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {
buscar:string=""
  constructor(public peliculasService:PeliculasService,
    private route:ActivatedRoute) { 
      this.route.params.subscribe(params=>{
       
        if(params){
            this.buscar=params['texto'];
            this.buscarPelicula();
        }
      });
    }

  ngOnInit(): void {
  }

  buscarPelicula(){
    if(this.buscar){
    if(this.buscar.length===0){
      return;
    }
    this.peliculasService.buscarPelicula(this.buscar).subscribe(resp=>"");
    }
  }
}
