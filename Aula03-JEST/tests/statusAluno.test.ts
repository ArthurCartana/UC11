import {statusAluno} from '../src/statusAluno';

describe('Função statusAluno', () => {
    it('deve retornar aprovado para nota maior que 70 e frenquência maior que 75', () => {
        expect(statusAluno(80,80)).toBe("Aprovado!");
    });

    it('deve retornar recuperação para nota maior que 70 e frenquência menor que 75', () => {
        expect(()=> statusAluno(80,50)).toThrow("Recuperação!");
    });

    it('deve retornar reprovado para nota menor que 70', () => {
        expect(() => statusAluno(60,90)).toThrow("Reprovado!");
    });
});