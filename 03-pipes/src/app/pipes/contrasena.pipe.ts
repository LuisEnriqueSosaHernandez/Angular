import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar:boolean=false): string {
    /*let pass:string ="";
    if(activar){
      for(let i=0;i<value.length;i++){
          pass+= value[i].replace(value[i],'*');
      }
    }else{
      pass=value;
    }
    return pass;*/

    return (activar) ? '*'.repeat(value.length):value;

  }
}
