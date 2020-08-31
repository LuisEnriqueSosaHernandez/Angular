import { Component, OnDestroy, Input} from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy{

  @Input () results: any[]=[]

  // results: any[]=[
  //   {
  //     "name": "Juego 1",
  //     "value": 20
  //   },
  //   {
  //     "name": "Juego 2",
  //     "value": 25
  //   },
  //   {
  //     "name": "Juego 3",
  //     "value": 15
  //   },
  //   {
  //     "name": "Juego 4",
  //     "value": 30
  //   }
  // ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  // intervalo;

  constructor() {
    // this.intervalo=setInterval(()=>{
    //   const newResults =[...this.results];
    //   for(let i in newResults){
    //     newResults[i].value= Math.floor(Math.random() * (25 - 1)) + 1;
    // }
    // this.results= [...newResults];
    // },1000);


  }
  ngOnDestroy(): void {
    // clearInterval(this.intervalo);
  }


  onSelect(event) {
    console.log(event);
  }

}
