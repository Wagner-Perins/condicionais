// O sistema de uma instituição financeira apresentou um problema ao
// imprimir a mensagem do saldo de um cliente. O saldo era de 1 Real e o sistema estava
// imprimindo a mensagem "Seu saldo é R$ 1 reais" com o nome de moeda no plural, mas sabemos
// que o correto seria "1 real" e seria no plural apenas se o saldo fosse maior que 1.
// Crie um programa que receba o saldo e imprima a mensagem do saldo, de acordo com o seu valor.

// Minha solução para o problema;

// const saldoCliente: number = 1;
// const resultado = saldoCliente >= 2 ? `Seu saldo é R$ ${saldoCliente} reais` : `Seu saldo é R$ ${saldoCliente} real`;

// console.log(resultado);

// Solução do Prf Guido;

const saldo: number = 1;

const unidade = saldo === 1 ? 'real' : 'reais';

console.log(`Seu saldo é R$ ${saldo} ${unidade}`);
