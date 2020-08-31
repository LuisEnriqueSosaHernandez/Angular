import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
@Input ("appResaltado") nuevoColor:string;
  constructor( private el:ElementRef) {
    console.log("Directiva llamada");
    // el.nativeElement.style.backgroundColor="yellow";
   }
   @HostListener('mouseenter') mouseEntro(){
     this.resaltar(this.nuevoColor||'yellow');
    //this.el.nativeElement.style.backgroundColor="yellow";
   }
   @HostListener('mouseleave') mouseSalio(){
    //  this.el.nativeElement.style.backgroundColor=null;
    this.resaltar(null);
   }

   private resaltar(color:string){
    this.el.nativeElement.style.backgroundColor=color;
   }



}
