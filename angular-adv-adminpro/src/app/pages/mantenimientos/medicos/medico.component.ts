import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import { Hospital } from 'src/app/models/hospital.model';
import { Medico } from 'src/app/models/medico.model';
import { HospitalService } from 'src/app/services/hospital.service';
import { MedicoService } from 'src/app/services/medico.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: [
  ]
})
export class MedicoComponent implements OnInit {
 public medicoForm:FormGroup;
 public hospitales: Hospital[]=[];
 public hospitalSeleccionado: Hospital;
 public medicoSeleccionado:Medico;
  constructor(private fb:FormBuilder,
    private hospitalService:HospitalService,
    private medicoService: MedicoService,
    private router:Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({id})=>{
      this.cargarMedico(id);
    })
   
    this.medicoForm=this.fb.group({
      nombre:['',Validators.required],
      hospital: ['',Validators.required]
    })
    this.cargarHospitales();
    this.medicoForm.get('hospital').valueChanges
    .subscribe(hospitalId=>{
     this.hospitalSeleccionado=this.hospitales.find((h:Hospital)=>h._id===hospitalId);
      // console.log(this.hospitalSeleccionado.img);
     
    })
  }

  cargarHospitales(){
    this.hospitalService.cargarHospitales().subscribe((hospitales: Hospital[])=>{
    //  console.log(hospitales);
      this.hospitales = hospitales;
    });
  }

  guardarMedico(){
    if(this.medicoSeleccionado){
      //actualizar
      const {nombre}=(this.medicoForm.value)
      const data={
        ...this.medicoForm.value,
        _id:this.medicoSeleccionado._id
      }
      this.medicoService.actualizarMedico(data).
      subscribe(resp=>{
      //  console.log(resp);
        Swal.fire('Actualizado',`${nombre} creado correctamente`,'success')
      })
    }else{
      const {nombre}=(this.medicoForm.value)
      this.medicoService.crearMedico(this.medicoForm.value)
      .subscribe((resp:any)=>{
        Swal.fire('Creado',`${nombre} creado correctamente`,'success')
        this.router.navigateByUrl(`/dashboard/medico/${resp.medico._id}`);
      })
    }
  }

  cargarMedico(id:string){
    if(id==='nuevo'){
      return;
    }
    this.medicoService.obtenerMedicoById(id).
    pipe(
      delay(100)
    )
    .subscribe(medico=>{
      if(!medico){
        this.router.navigateByUrl(`/dashboard/medicos`);
        return;
      }
        const{nombre,hospital:{_id}}=medico;
        this.medicoSeleccionado = medico;  
        this.medicoForm.setValue({nombre,hospital: _id});
      

    })
  }

}
