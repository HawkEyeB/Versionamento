/* 
lista de cadastro de alunos
percorrer a lista:
    - percorrer de Zero até o número de alunos.
    - se o número for par, escreva par e o número correspondente
    - se o número for impar, escreva impar e o número correspondente
    - se o número for 0, escreva Zero.
*/
let numeroDeAlunos = 10
let indice = 0

// Laço For
/*for (let indice = 0; indice <= numeroDeAlunos; indice ++){
    if(indice == 0) {
        console.log("O número é " + indice + " Zero")

    }else if(indice%2 == 0) {
        console.log("O número " + indice + " Par")

    }else {
        console.log (`O número ${indice} é Impar`)

    }
}*/

// Laço While
/*while (indice <= numeroDeAlunos){
    if(indice == 0) {
        console.log("O número é " + indice + " Zero")

    }else if(indice%2 == 0) {
        console.log("O número " + indice + " Par")

    }else {
        console.log (`O número ${indice} é Impar`)

    }
    indice ++
}*/

//Laço Do While
/*do{
    if(indice == 0) {
        console.log("O número é " + indice + " Zero")

    }else if(indice%2 == 0) {
        console.log("O número " + indice + " Par")

    }else {
        console.log (`O número ${indice} é Impar`)

    }
    indice ++

}while(indice<=numeroDeAlunos)
*/

// For para percorrer listas. JavaScript
let nomeDeAlunos = ["Alexandre", "André", "Carla", "Marcelo"];

for (let nome of nomeDeAlunos) {
    console.log(`Essa pessoa se chama ${nome}`);
}

// indice = indice + 2 - para incrementos maiores que ++
// O For inicializa a variável Contadora, mas as outras estruturas de decisão não.