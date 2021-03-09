import { Jugador } from "./clase"

describe('Pruebas de clase',()=>{
    let jugador=new Jugador();

    beforeAll(()=>{
       // console.log('beforeAll');
    });
    beforeEach(()=>{
        //console.log('beforeEach');
        //jugador.hp=100;
        //jugador=new Jugador();
    });
    afterAll(()=>{
        //console.log('afterAll');
    });
    afterEach(()=>{
       // console.log('afterEach');
      //jugador.hp=100;
      jugador=new Jugador();
    });
    
    it('Debe de retornar 80 de hp si recibe 20 de danio',()=>{
       // const jugador=new Jugador();
        const res =  jugador.recibeDanio(20);
        expect(res).toBe(80);
    });
    it('Debe de retornar 50 de hp si recibe 50 de danio',()=>{
        //const jugador=new Jugador();
        const res =  jugador.recibeDanio(50);
        expect(res).toBe(50);
    });

    it('Debe de retornar 0 de hp si recibe 100 de danio o mas',()=>{
        //const jugador=new Jugador();
        const res =  jugador.recibeDanio(100);
        expect(res).toBe(0);
    });

    
})