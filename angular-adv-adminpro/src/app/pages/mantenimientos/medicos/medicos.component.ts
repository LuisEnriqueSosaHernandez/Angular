import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Medico } from 'src/app/models/medico.model';
import { BusquedasService } from 'src/app/services/busquedas.service';
import { ModalImagenService } from 'src/app/services/modal-imagen.service';
import Swal from 'sweetalert2';
import { MedicoService } from "../../../services/medico.service";
@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: [
  ]
})
export class MedicosComponent implements OnInit {
  public cargando:boolean=true;
  public medicos:Medico[]=[];
  private imgSubs: Subscription;
  constructor(private medicoService: MedicoService,
    private modalImagenService: ModalImagenService,
    private busquedasService: BusquedasService) { }

  ngOnInit(): void {
  this.cargarMedicos();
  this.imgSubs = this.modalImagenService.nuevaImagen.pipe(
    delay(100)
  ).subscribe(img => {
    this.cargarMedicos()
  });
  }
  ngOnDestroy(){
    this.imgSubs.unsubscribe();
  }

  cargarMedicos(){
    this.cargando=true;
    this.medicoService.cargarMedicos().subscribe(medicos=>{
      this.cargando=false;
      this.medicos=medicos;
    })
  }

  abrirModal(medico:Medico){
    this.modalImagenService.abrirModal('medicos', medico._id, medico.img);
  }
  buscar(termino: string) {
    if (termino.length === 0) {
      this.cargarMedicos();
      return;
    }
    this.busquedasService.buscar('medicos', termino)
      .subscribe(resultados => {
        this.medicos = resultados as Medico[];
      });
  }
  eliminarMedico(medico: Medico) {
      Swal.fire({
        title: 'Borrar medico?',
        text: `Esta a punto de borrar a ${medico.nombre}`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Si, borrarlo!'
      }).then((result) => {
        if (result.isConfirmed) {
         this.medicoService.borrarMedico(medico._id).subscribe(resp=>{
          this.cargarMedicos();
           Swal.fire('Medico borrado',
           `${medico.nombre} fue eliminado correctamente`,
           'success');
          
         })
        }
      })
  }
}
