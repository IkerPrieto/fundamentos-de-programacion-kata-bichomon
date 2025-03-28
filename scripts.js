console.log(document.title);

// Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
const gen1 = document.getElementById('gen-1')
gen1.innerText = 'Generasión 1 Pokimon'

// Cambia el color de fondo de la primera generación de Pokimon.
const primGen = document.querySelectorAll('.infocard-list.infocard-list-pkmn-lg')
primGen[0].style.backgroundColor = 'beige'

// Imprime por consola la URL de la página.
console.log(document.URL)

// Imprime por consola el dominio de la página.
console.log(document.domain)

// Imprime todos los nodos de imagen.
const images = document.querySelectorAll('img')
console.log(images)

// Sustituye el atributo "src" de todas las imágenes por este
document.querySelectorAll('.img-fixed.img-sprite').forEach(img => img.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif")

// Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
document.querySelectorAll(".infocard-lg-data.text-muted").forEach(card => {
    if (card.innerHTML.includes('itype flying')) { 
        card.style.backgroundColor = "#A0E7FF";
    }
});

/*
document
.querySelectorAll(".infocard-lg-data.text-muted .itype.flying")
.forEach(
(card) => (card.closest(".infocard-lg-data.text-muted").style.background =
"lightblue")
);
*/