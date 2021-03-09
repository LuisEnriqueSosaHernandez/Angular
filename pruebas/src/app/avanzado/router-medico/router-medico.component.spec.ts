import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, Subject } from 'rxjs';

import { RouterMedicoComponent } from './router-medico.component';

class FakeRouter{
  navigate(params){

  }
}

class FakeActivatedRoute{
  //params: Observable<any>=EMPTY;

  private subject= new Subject();
  get params(){
    return this.subject.asObservable();
  }

  push(valor){
    this.subject.next(valor);
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterMedicoComponent ],
      providers:[
        {provide: Router,useClass: FakeRouter},
        {provide:ActivatedRoute,useClass: FakeActivatedRoute}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de redireccionar a medico cuando se guarde',()=>{
    const router=TestBed.get(Router);
    const spy=spyOn(router,'navigate');
    component.guardarMedico();
    expect(spy).toHaveBeenCalledWith(["medico","123"]);
  })

  it('Debe de colocar el id  =  nuevo',()=>{
    component =  fixture.componentInstance;
    const activatedRoute : FakeActivatedRoute = TestBed.get(ActivatedRoute);
    activatedRoute.push({id: 'nuevo'});
    expect(component.id).toBe('nuevo');
  })

});
