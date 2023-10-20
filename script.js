const quotes = [
  {
    quote:
      "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
    author: " Life",
  },
  {
    quote:
      "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
    author: "John Kenneth Galbraith",
  },
  {
    quote: "God save me from my friends. I can protect myself from my enemies.",
    author: "Claude Louis Hector de Villars ",
  },
  {
    quote: "The price of anything is the amount of life you exchange for it.",
    author: "David Thoreau",
  },
  {
    quote:
      "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
    author: "Charles Lindbergh",
  },
  {
    quote:
      "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
    author: " Tyne Daly",
  },
];

function getRandomItem(arr) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

// Seleccionar el nodo y le vamos a añadir un listener para gestionar el evento click
let button = document.getElementById("generate-quote");
button.addEventListener("click", function () {
  // 1. Obtener una quote random (objeto)
  const quote = getRandomItem(quotes);
  console.log("🚀 ~ file: script.js:47 ~ quote:", quote);

  // 2. MEterlo en la propiead .textContent del nodo .quote--text y .quote--author.
  // De esa manera, estamos accediendo a la propiedad y acutalizandola todo en una línea
  document.querySelector(".quote--text").textContent = quote.quote;

  // Otra manera de actualizar el nodo, es gurdando dicho nodo, en una variable. Esto es útil cuando tienes que modificar muchas propiedades
  let nodoAuthor = document.querySelector(".quote--author");
  nodoAuthor.textContent = quote.author;
  nodoAuthor.style.color = "blue";
  nodoAuthor.classList.add("bg-danger");
});
