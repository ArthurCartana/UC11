import {ehPar} from '../src/ehPar';

describe('Função ehPar', () => {
    it('deve retornar true para número par', () => {
        expect(ehPar(4)).toBeTruthy();
    });
    it('deve retornar false para número ímpar', () => {
        expect(ehPar(3)).toBeFalsy();
    });
});