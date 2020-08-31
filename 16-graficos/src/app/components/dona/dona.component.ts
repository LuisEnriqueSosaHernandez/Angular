import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent implements OnInit {

 // Doughnut
 public doughnutChartLabels: Label[] = ['Tamales', 'Tortillas', 'Chorizo'];
 public doughnutChartData: MultiDataSet = [
   [350, 450, 100],
   [50, 150, 120],
   [250, 130, 70],
 ];
 public doughnutChartType: ChartType = 'doughnut';
 @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
 constructor() { }

 ngOnInit() {
 }

 // events
 public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
   console.log(event, active);
 }

 public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
   console.log(event, active);
 }

 public numeros_random(){
   for(let i=0;i<3;i++){
     for(let j=0;j<3;j++){
       this.doughnutChartData[i][j] = Math.round(Math.random()*100);
     }
   }
   this.chart.update();
 }

}
