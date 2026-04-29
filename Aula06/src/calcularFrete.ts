/*export function calcularFrete(valor: number): number {
    if (valor > 200) {
        return 0;
    } else {
        return 20
    }
}*/

export function calcularFrete(valor:number): number {
    const valorFrete = valor > 200;
    return valorFrete ? valor = 0 : valor = 20;
}
