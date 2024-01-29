function pokemon_guesser () {
  const randomPokemonId = Math.floor(Math.random() * 1025) + 1;
let pokemonJSON;

fetch("https://pokeapi.co/api/v2/pokemon/" + randomPokemonId).then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }).then(data => {
    pokemonJSON = data;
    const pokemonName = pokemonJSON.name;
    const pokemonSpriteUrl = pokemonJSON.sprites.front_default;
    document.querySelector("#pokemon-sprite").src = pokemonSpriteUrl;  
  
    let guess = document.querySelector("#pokemon-guess"); 
    document.querySelector("#guess-button").addEventListener("click", () => {
      if (guess.value.toLowerCase() === pokemonName.toLowerCase()) {
        document.querySelector("#result").textContent = "Correct!"
      } else {
        document.querySelector("#result").textContent = "Womp Womp"
      }
    })
      
}).catch(error => {
  console.error('Error:', error);
})
}

pokemon_guesser();
let refreshButton = document.querySelector("#refresh").addEventListener("click", () => {
  pokemon_guesser();
  
  let guess = document.querySelector("#pokemon-guess"); 
  guess.value="";
  document.querySelector("#result").textContent = "";
})


