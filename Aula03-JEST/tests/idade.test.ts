import {validarIdade} from '../src/idade';

describe('Função validarIdade', () => {
    it('deve retornar true para número maior ou igual a 18', () => {
        expect(validarIdade(19)).toBeTruthy();
    });
    it('deve retornar false para número menor que 18', () => {
        expect(validarIdade(17)).toBeFalsy();
    });
});