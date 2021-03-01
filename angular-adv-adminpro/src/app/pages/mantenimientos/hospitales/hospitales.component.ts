import { Component, OnInit } from '@angular/core';
import { Hospital } from '../../../models/hospital.model';
import { HospitalService } from "../../../services/hospital.service";

import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { ModalImagenService } from '../../../services/modal-imagen.service';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BusquedasService } from 'src/app/services/busquedas.service';
const base_url = environment.base_url;

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: [
  ]
})
export class HospitalesComponent implements OnInit {
  public hospitales: Hospital[] = [];
  public cargando: boolean = true;
  private imgSubs: Subscription;
  constructor(private hospitalService: HospitalService,
    private modalImagenService: ModalImagenService,
    private busquedasService: BusquedasService) { }

  ngOnInit(): void {
    this.cargarHospitales();

    this.cargarHospitales();
    this.imgSubs = this.modalImagenService.nuevaImagen.pipe(
      delay(100)
    ).subscribe(img => {
      this.cargarHospitales()
    });
  }
  ngOnDestroy(){
    this.imgSubs.unsubscribe();
  }
  cargarHospitales() {
    this.cargando = true;
    this.hospitalService.cargarHospitales().subscribe(hospitales => {
      this.cargando = false
      this.hospitales = hospitales;
    });
  }

  recuperaImagen(hospital: Hospital) {
    // /upload/usuarios/no-image
    if (!hospital.img) {
      return `${base_url}/upload/hospitales/no-img`;
    } else if (hospital.img.includes('https')) {
      return hospital.img;
    } else if (hospital.img) {
      return `${base_url}/upload/hospitales/${hospital.img}`;
    } else {
      return `${base_url}/upload/hospitales/no-img`;
    }
  }
  guardarCambios(hospital: Hospital) {
    this.hospitalService.actualizarHospital(hospital._id, hospital.nombre).subscribe(resp => {
      Swal.fire('Actualizado', hospital.nombre, 'success');
    })
  }

  eliminarHospital(hospital: Hospital) {
    this.hospitalService.borrarHospital(hospital._id).subscribe(resp => {
      this.cargarHospitales();
      Swal.fire('Borrado', hospital.nombre, 'success');
    })
  }

  async abrirSweetAlert() {
    const { value = '' } = await Swal.fire<string>({
      title: 'Modal',
      text: 'Nuevo hospital',
      input: 'text',
      inputPlaceholder: 'Ingresa nombre del hospital',
      showCancelButton: true
    })
    if (value.trim().length > 0) {
      this.hospitalService.crearHospital(value).subscribe((resp: any) => {
        this.hospitales.push(resp.hospital);
      })
    }
  }
  abrilModal(hospital: Hospital) {
    this.modalImagenService.abrirModal('hospitales', hospital._id, hospital.img);
  }

  buscar(termino: string) {
    if (termino.length === 0) {
      this.cargarHospitales();
      return;
    }
    this.busquedasService.buscar('hospitales', termino)
      .subscribe(resultados => {
        this.hospitales = resultados as Hospital[];
      });
  }
}

