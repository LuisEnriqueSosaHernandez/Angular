import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.getUsuarios();

     this.getUsuarios().then(usuarios=>{
      console.log(usuarios);
     });
    // const promesa = new Promise((resolve, reject) => {
    //   if (false) {
    //     resolve('Hola mundo');
    //   } else {
    //     reject('Algo salio mal');
    //   }
    // });

    // promesa.then((res) => {
    //   console.log(res);
    // }).catch((res) => {
    //   console.log(res);
    // })
    // console.log('Fin del init');
  }

  getUsuarios(){
  return new Promise((resolve,reject)=>{
    fetch('https://reqres.in/api/users').then(res=>res.json().then(body=>resolve(body.data)))
    });
  }

}
