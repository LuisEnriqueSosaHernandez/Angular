import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';
import { AlertController, IonList } from '@ionic/angular';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  @ViewChild(IonList) lista:IonList;
  @Input() terminada = true
 
  constructor( private router: Router,
    public deseosService: DeseosService,
    private alertCtrl: AlertController) { }

  ngOnInit() {}

  listaSeleccionada(lista:Lista){
    if(this.terminada){
    this.router.navigateByUrl(`tabs/tab2/agregar/${lista.id}`);
    }else{
      this.router.navigateByUrl(`tabs/tab1/agregar/${lista.id}`);
    }
  }
  borrarLista(lista:Lista){
    this.deseosService.borrarLista;
  }

  async editarLista(lista:Lista) {
    const alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      header: "Editar título",
      inputs: [
        {
          name: "titulo",
          type: "text",
          value:lista.titulo,
          placeholder: "Nombre de la lista",
        },
      ],
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            console.log("cancelar");
            this.lista.closeSlidingItems();
          },
        },
        {
          text: "Editar",
          handler: (data) => {
            //console.log(data);
            if(data.titulo.length===0){
              return;
            }
            lista.titulo=data.titulo;
            this.deseosService.guardarStorage();
            this.lista.closeSlidingItems();
          }
        }
      ],
    });

    alert.present();
  }

}
