import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: [
  ]
})
export class PeliculaComponent implements OnInit {
pelicula:any;
regresarA:string="";
busqueda:string="";
constructor(public peliculasService:PeliculasService,
  private route:ActivatedRoute) { 
    this.route.params.subscribe(params=>{
      this.regresarA=params['pag'];
      if(params['busqueda']){
        this.busqueda=params['busqueda'];
      }
      this.peliculasService.getPelicula(params['id']).subscribe(res=>{
        this.pelicula=res
      });
    });
  }

  ngOnInit(): void {
  }

}
