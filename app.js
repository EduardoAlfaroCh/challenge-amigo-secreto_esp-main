let amigos = []; // Arreglo para almacenar los nombres de los amigos

// Función para agregar un nuevo amigo a la lista
function agregarAmigo() {
    const nombreAmigo = document.getElementById('amigo').value.trim(); // Obtener el valor del campo de texto y eliminar espacios en blanco
    if (nombreAmigo === "") { // Verificar si el campo de texto está vacío
        alert("Por favor, ingrese un nombre válido."); // Mostrar una alerta si el campo está vacío
        return; // Salir de la función si el campo está vacío
    }
    amigos.push(nombreAmigo); // Agregar el nombre al arreglo de amigos
    mostrarListaAmigos(); // Actualizar la lista de amigos en la página
    document.getElementById('amigo').value = ""; // Limpiar el campo de texto
}

// Función para mostrar la lista de amigos en la página
function mostrarListaAmigos() {
    const lista = document.getElementById('listaAmigos'); // Obtener el elemento donde se mostrará la lista de amigos
    lista.innerHTML = ""; // Limpiar el contenido actual de la lista
    amigos.forEach((amigo, index) => { // Recorrer el arreglo de amigos
        const amigoLi = document.createElement('li'); // Crear un nuevo elemento de lista para cada amigo
        amigoLi.className = 'amigo'; // Asignar una clase al elemento de lista
        amigoLi.textContent = (index + 1) + ". " + amigo; // Establecer el contenido del elemento de lista
        lista.appendChild(amigoLi); // Agregar el elemento de lista al contenedor de la lista
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) { // Verificar si la lista de amigos está vacía
        alert("No hay amigos en la lista para sortear."); // Mostrar una alerta si la lista está vacía
        return; // Salir de la función si la lista está vacía
    }
    const indiceSorteado = Math.floor(Math.random() * amigos.length); // Generar un índice aleatorio basado en la longitud del arreglo de amigos
    const amigoSorteado = amigos[indiceSorteado]; // Obtener el nombre del amigo sorteado usando el índice aleatorio
    document.getElementById('resultado').textContent = "¡El amigo secreto es: " + amigoSorteado + "!"; // Mostrar el nombre del amigo sorteado en la página
}
