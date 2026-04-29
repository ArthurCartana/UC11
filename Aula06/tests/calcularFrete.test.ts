import {calcularFrete} from '../src/calcularFrete'

describe ('Função calcularFrete', () => {
    it('deve aplicar uma taxa se o valor for menor que 200', () => {
        expect(calcularFrete(10)).toBe(20);
    })
    it(' Não deve aplicar uma taxa se o valor for maior que 200', () => {
        expect(calcularFrete(201)).toBe(0);
    })
})