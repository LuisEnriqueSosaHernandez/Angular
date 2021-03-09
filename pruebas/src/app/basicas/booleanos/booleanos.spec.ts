import { usuarioIngresado } from "./booleanos";

describe('Pruebas de booleanos',()=>{
    it('Debe de retornar true',()=>{
        const res = usuarioIngresado();
        expect(res).toBeTruthy();
        //expect(res).not.toBeTruthy();

        //expect(res).toBeFalsy();
    });
})