import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['./nopagefound.components.css'
  ]
})
export class NopagefoundComponent {
year:Number = new Date().getFullYear();
}
