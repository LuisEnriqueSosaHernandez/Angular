import { Component, OnInit } from '@angular/core';
import { ChatService } from "../../providers/chat.service";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit {
  mensaje: string = "";
  elemento: any;

  constructor(public chatService: ChatService) {
  /*   setTimeout(() => {
      chatService.cargarMensajes().subscribe(() => this.elemento.scrollTop = this.elemento.scrollHeight);
    }, 1000);
 */
chatService.cargarMensajes().subscribe(() => this.elemento.scrollTop = this.elemento.scrollHeight);
  }
  ngOnInit(): void {
    this.elemento = document.getElementById('app-mensajes');
  }

  enviar_mensaje() {
    console.log(this.mensaje);
    if (this.mensaje.length === 0) {
      return;
    }
    this.chatService.agregarMensaje(this.mensaje).then(() => {
      console.log("Hecho");
      this.mensaje = "";
    }).
      catch((err) => console.error("Error al enviar", err));
  }

}
