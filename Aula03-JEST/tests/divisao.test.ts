import { divisao } from "../src/divisao";

describe('Função dividir', ()=>{
    it('deve dividir corretamente', ()=>{
        expect(divisao(10,2)).toBe(5);
    });
    it('deve lançar erro ao dividir por zero',()=>{
        expect(()=>divisao(10,0)).toThrow();
    });
});