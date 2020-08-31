import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cuadro',
  templateUrl: './cuadro.component.html',
  styles: [
  ]
})
export class CuadroComponent implements OnInit {
@Input('peliculas') peliculas;
@Input('titulo')titulo;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
