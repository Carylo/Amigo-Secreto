let amigos = [];

function agregarAmigo() {
    const nombreInput = document.getElementById('amigo');
    const nombre = nombreInput.value.trim();
    
    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    
    amigos.push(nombre);
    nombreInput.value = '';
    actualizarLista();
}

function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, añade al menos un amigo para sortear.');
        return;
    }

    const amigoSeleccionado = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const liResultado = document.createElement('li');
    liResultado.textContent = `¡El amigo secreto es: ${amigoSeleccionado}!`;
    resultado.appendChild(liResultado);
}
