import { Jugador2 } from "./jugador2"

describe('Jugador2 Emmit',()=>{
    let jugador: Jugador2;

    beforeEach(()=>jugador=new Jugador2());

    it('Debe de emitir un evento cuando recibe danio',()=>{
        let nuevoHp=0;
        jugador.hpCambia.subscribe(hp=>{
            nuevoHp=hp;
        });

        jugador.recibeDanio(1000);
        expect(nuevoHp).toBe(0);
    })

    it('Debe de emitir un evento cuando recibe danio y sobrevivir',()=>{
        let nuevoHp=0;
        jugador.hpCambia.subscribe(hp=>nuevoHp=hp);

        jugador.recibeDanio(50);
        expect(nuevoHp).toBe(50);
    })
})