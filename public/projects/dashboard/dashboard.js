/* let bsDialog

function init () {

    bsDialog = new bootstrap.Dialog('#form-dialog')

    document.querySelector('#btn-agregar')
      .addEventListener('click', () => bsDialog.show())
}

/** NO MODIFICAR */
/*window.addEventListener('load', () => {
    import('https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.bundle.min.js')
        .then(bootstrap => {
            window.bootstrap = bootstrap

            init()
        })
}) */




const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon/'

let bsDialog

// Inicializar la página
function init() {

    bsDialog = new bootstrap.Dialog('#form-dialog')

    document.querySelector('#btn-agregar')
        .addEventListener('click', () => bsDialog.show())

    document.querySelector('#btn-buscar')
        .addEventListener('click', buscar)

    // Mostrar los pokemones guardados
    mostrarPokemones()
}

// Buscar pokemon
function buscar(evt) {

    evt.preventDefault()

    // Obtengo la funcion que le mande al usuario
    let poke = document.querySelector('#inp-search').value

    // Consultar la PokeAPI
    fetch(POKEAPI_URL + poke.toLowerCase())

    .then(respuesta => {
        return respuesta.json()
    })

    .then(datos => {

        console.log(datos)

        // Obtener los pokemones guardados
        let pokemones = JSON.parse(localStorage.getItem('pokemones')) || []

        // Crear un nuevo pokemon
        let nuevoPokemon = {
            id: datos.id,
            nombre: datos.name,
            imagen: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + datos.id + '.png'
        }

        // Guardar el pokemon en la lista
        pokemones.push(nuevoPokemon)

        // Guardar la lista en localStorage
        localStorage.setItem('pokemones', JSON.stringify(pokemones))

        // Mostrar los pokemones
        mostrarPokemones()

        // Cerrar el cuadro de busqueda
        bsDialog.hide()

        document.querySelector('#inp-search').value = ''

    })

    .catch(error => {
        alert('Pokemon no encontrado')
        console.log(error)
    })
}

// Mostrar los pokemones guardados
function mostrarPokemones() {

    let pokemones = JSON.parse(localStorage.getItem('pokemones')) || []

    let tabla = document.querySelector('tbody')

    tabla.innerHTML = ''

    pokemones.forEach(poke => {

        let fila = document.createElement('tr')

        let numero = document.createElement('td')
        let nombre = document.createElement('td')
        let sprite = document.createElement('td')

        numero.innerHTML = poke.id
        nombre.innerHTML = poke.nombre

        let img = document.createElement('img')
        img.src = poke.imagen

        sprite.appendChild(img)

        fila.appendChild(numero)
        fila.appendChild(nombre)
        fila.appendChild(sprite)

        tabla.appendChild(fila)

    })
}

// No modifica.
window.addEventListener('load', () => {

    import('https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.bundle.min.js')

        .then(bootstrap => {

            window.bootstrap = bootstrap

            init()

        })

})


