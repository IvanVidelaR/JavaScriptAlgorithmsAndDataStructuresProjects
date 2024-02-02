const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const pokedexAPI = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon"
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const hashtag = document.querySelector(".hashtag");
const pokemonWeight = document.getElementById("weight");
const pokemonHeight = document.getElementById("height");
const weightText = document.getElementById("weight-text");
const heightText = document.getElementById("height-text");
const types = document.getElementById("types");
const spriteContainer = document.getElementById("sprite-container");
const gridContainerParagraphs = document.querySelectorAll(".grid-container p");
const pokemonHp = document.getElementById("hp");
const pokemonAttack = document.getElementById("attack");
const pokemonDefense = document.getElementById("defense");
const pokemonSpAttack = document.getElementById("special-attack");
const pokemonSpDefense = document.getElementById("special-defense");
const pokemonSpeed = document.getElementById("speed");

gridContainerParagraphs.forEach(paragraph => {
    paragraph.classList.add("base-color");
}); 

const getPokemon = async () => {
    try 
    {
        const res = await fetch(pokedexAPI + "/" + searchInput.value.toLowerCase());
        const data = await res.json();
        
        pokemonName.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        pokemonId.textContent = "#" + data.id;
        pokemonHeight.textContent = data.height;
        pokemonWeight.textContent = data.weight;
        weightText.textContent = "weight";
        heightText.textContent = "height";
        let listaTipos = data.types.map((object) => object.type.name)
        types.innerHTML = "";
        listaTipos.forEach(element => {
            types.innerHTML += `<span class="type ${element}">${element.toUpperCase()}<span>`
        });
        spriteContainer.className = "";
        spriteContainer.classList.add(`${listaTipos[0]}`);
        gridContainerParagraphs.forEach(paragraph => {
            paragraph.className = "";
            paragraph.classList.add(listaTipos[0]);
        });
        spriteContainer.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="${data.name} front default sprite">`

        let listaStats = data.stats.map((object) => {
            return { [object.stat.name]: object.base_stat };
        });
        listaStats.forEach(stat => {
            switch(Object.keys(stat)[0]) {
                case "hp":
                    pokemonHp.textContent = stat["hp"];
                    break;
                case "attack":
                    pokemonAttack.textContent = stat["attack"];
                    break;
                case "defense":
                    pokemonDefense.textContent = stat["defense"];
                    break;
                case "special-attack":
                    pokemonSpAttack.textContent = stat["special-attack"];
                    break;
                case "special-defense":
                    pokemonSpDefense.textContent = stat["special-defense"];
                    break;
                case "speed":
                    pokemonSpeed.textContent = stat["speed"];
                    break;
            }
        });

        searchInput.value = "";
    }
    catch(err)
    {
        searchInput.value = "";
        alert('Pokémon not found');
        console.log(`Pokémon not found: ${err}`);
        resetDisplay();
    }
}

const resetDisplay = () => {
    const sprite = document.getElementById('sprite');
    sprite.remove();

    gridContainerParagraphs.forEach(paragraph => {
        paragraph.classList.add("base-color");
    }); 
    spriteContainer.className = "";
    pokemonName.textContent = "";
    pokemonId.textContent = "";
    types.innerHTML = "";
    pokemonHeight.textContent = "";
    pokemonWeight.textContent = "";
    weightText.textContent = "";
    heightText.textContent = "";
    pokemonHp.textContent = "";
    pokemonAttack.textContent = "";
    pokemonDefense.textContent = "";
    pokemonSpAttack.textContent = "";
    pokemonSpDefense.textContent = "";
    pokemonSpeed.textContent = "";

};

searchButton.addEventListener("click", () => getPokemon())
searchInput.addEventListener("keydown", e => {
    if (e.key === 'Enter') {
        getPokemon()
    }
})
