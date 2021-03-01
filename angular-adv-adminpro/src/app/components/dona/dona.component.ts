import { Component, Input } from '@angular/core';
import { Color, MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {
@Input() title:string='Sin titulo';
@Input('labels') doughnutChartLabels: Label[] = ['Label1', 'Label2', 'Label3'];
@Input('data') doughnutChartData = [
    [350, 450, 100]
  ];
public colors:Color[]=[
  {backgroundColor:['#6857E6','#009FEE','#F02059']}
]  


}
