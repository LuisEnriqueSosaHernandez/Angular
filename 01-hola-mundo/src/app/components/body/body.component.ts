import { Component } from "@angular/core";

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent{
    mostrar=true;
    frase: any={
        mensaje: 'Las tortillas estan frías',
        autor: 'El sosas'
    }

    personajes: string[] = ['kike','karina','brenda'];

}