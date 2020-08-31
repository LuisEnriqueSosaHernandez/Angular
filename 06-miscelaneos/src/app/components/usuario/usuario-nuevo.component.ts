import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private route:ActivatedRoute ) {
    console.log("Ruta Hija Usuario nuevo");
    this.route.parent.params.subscribe(parametros=>console.log(parametros));
  }

  ngOnInit(): void {
  }

}
