// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// Funcion para agregar amigos
function agregarAmigo(){
    var amigo = document.getElementById('amigo').value;
    if(amigo == ''){
        alert('Por favor, inserte un nombre');
        return;
    }
    if(amigos.includes(amigo)){
        alert('El amigo ya fue agregado');
        return;
    }
    amigos.push(amigo);

    // Limpia el input
    document.getElementById('amigo').value = ''; 

    // Actualiza la lista de amigos
    actualizarLista();
}

// Actualizar lista de amigos
function actualizarLista(){
    let lista = '';
    for(let i=0; i<amigos.length; i++){
        lista += `<li>${amigos[i]}</li>`;
    }
    document.getElementById('listaAmigos').innerHTML = lista;
}

// Sortear amigo secreto
function sortearAmigo(){
    if(amigos.length <2){
        alert('Por favor, agregue al menos 2 amigos');
        return;
    }

    // generar indice aleatorio
    indice = Math.floor(Math.random() * amigos.length);
    amigoSecreto = amigos[indice];
    document.getElementById('resultado').innerHTML = `El amigo secreto es: ${amigoSecreto}`;

}