import { obtenerRobots } from "./arreglos"

describe('Pruebas de arreglos',()=>{
    it('Debe de retornar al menos tres robotos',()=>{
        const res =  obtenerRobots();
        expect(res.length).toBeGreaterThanOrEqual(3);
    })
    it('Debe de existir Megaman y Ultron',()=>{
        const res =  obtenerRobots();
        expect(res).toContain('MegaMan');
        expect(res).toContain('Ultron');
    })
})