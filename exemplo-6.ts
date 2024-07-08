const temIngreso: boolean = true;
const idade: number = 15;
const censura: number = 16;
const estaComOsPais: boolean = true

// Operador lógivo AND - &&;
// Testa se todas as condições são verdadeiras;

// Operador lógico OR - ||;
// Testa se pelomenos uma condição é verdadeira;


//if (temIngreso && idade >= censura){
   // console.log('Pode entrar');
    
//} else {
   // console.log('Barrado');
    
//}

// if (temIngreso){
//     if (idade >= censura || estaComOsPais){
//         console.log('Pode entrar');

//     }else {
//         console.log('Barrado')

//     }
// } else {
//     console.log('Barrado');
    
// }

if (temIngreso && (idade >= censura || estaComOsPais)){
    console.log('Pode Entrar');
    
} else {
    console.log('Barrado');
    
}