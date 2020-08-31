import {
    Component, OnInit,OnChanges, DoCheck, AfterContentInit,
    AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges
  } from '@angular/core';
  
  @Component({
    selector: 'app-home',
    template: `
     <app-ng-style></app-ng-style> 
     <app-css>
    </app-css> 
     <app-clases></app-clases> 
    <p appResaltado="red">Hola mundo</p> 
    <app-ng-switch></app-ng-switch>
    `,
    styles: []
  })
  export class HomeComponent implements OnInit,OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  
    constructor() { 
        console.log("constructor");
    }
      ngOnDestroy(): void {
          console.log("ngOnDestroy");
      }
      ngAfterViewChecked(): void {
        console.log("ngOnDestroy");
      }
      ngAfterViewInit(): void {
        console.log("ngAfterViewInit");
      }
      ngAfterContentChecked(): void {
        console.log("ngAfterContentChecked");
      }
      ngAfterContentInit(): void {
        console.log("ngAfterContentInit");
      }
      ngDoCheck(): void {
        console.log("ngDoCheck");
      }
      ngOnChanges(changes: SimpleChanges): void {
        console.log("ngOnChanges");
      }
    ngOnInit(): void {
        console.log("ngOnInit");
    }
  
  }
  