import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  cartelera:any;
  populares:any;
  popularesNinos:any;
  constructor(peliculasService:PeliculasService) { 
    peliculasService.getCartelera().subscribe(resp=>this.cartelera=resp);
    peliculasService.getPopulares().subscribe(resp=>this.populares=resp);
    peliculasService.getPopularesNinos().subscribe(resp=>this.popularesNinos=resp);
  }

  

  ngOnInit(): void {
  }

}
