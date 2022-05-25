/* - Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.
-Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
-Listar participantes e palestrantes por evento.
-Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.
*/

// Cadastro de Eventos
let listaEventos = []
let dataEvento = 31/05/2021
if (dataEvento > 25/05/2021) {
    listaEventos.push("Palestra FrontEnd")
    console.log ("Evento Cadastrado com sucessos. Nome = " + listaEventos)
    quantidadeEventos = listaEventos.length

}else {
    console.log ("Evento não cadastrado. Por favor inserir data futura");
}

//Cadastro de Palestrantes
let listaPalestrantes = []
listaPalestrantes.push("Gabriel Monteiro");
console.log ("Palestrante cadastrado. Nome = " + listaPalestrantes)



// Cadastro de Participantes
let listaParticipantes = ["João", "Taiza", "Marcos", "Elaine"]
let quantidadeParticipantes = listaParticipantes.length
let participantesEventos = 100

if(quantidadeParticipantes < participantesEventos){  
    while(quantidadeParticipantes < participantesEventos){

    // Aqui teria que ter alguma forma de receber dados externos
        idade = 19
        participante = "Pedro"
        if(idade > 18) {
            listaParticipantes.push(participante)
            console.log ("Participante Cadastrado")
            quantidadeParticipantes = listaParticipantes.length

        }else {
            console.log ("Participante de menor. Cadastro não efetuado")

        }   
    }
}else{
    console.log ("Limite de Participantes excedido. Cadastros não podem ser efetuados nesse evento")
}
console.log ("Esse é o número de participantes da lista = " + quantidadeParticipantes)

for (let indice = 0; indice < quantidadeEventos; indice++){
    console.log("Nome do Evento: " + listaEventos[indice])
    for(let index = 0; index< listaPalestrantes.length; index++){
        console.log("Nome do Palestrante: " + listaPalestrantes[index])
        for (let indice1 = 0; indice1 < quantidadeParticipantes; indice1++) {
         console.log("Nome do Participante: " + listaParticipantes[indice1])
    
    }
        }
}