export function statusAluno(nota: number, frequencia: number) {
    if (nota >= 70 && frequencia >= 75) {
        console.log('Aprovado!');
    } if (nota >= 70 && frequencia < 75) {
        throw new Error('Recuperação!');
    } if (nota < 70 && frequencia > 75) {
        throw new Error('Reprovado!');
    }
}