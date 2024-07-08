// Escreva um programa que receba uma média esolar e imprima o resultado;
// Média menor que 4 - Reprovado;
// Média maior ou igual 4 e menor que 7 - Recuperação;
// Média maior que ou igual 7 - Aprovado;

// const media: number = 3;
// const media: number = 5;
const media: number = 8;

if (media < 4){
    console.log('Reprovado.')
} else if (media < 7){
    console.log('Recuperação.')
} else {
    console.log('Aprovado.')
}