// Variables 

const newQuote = document.querySelector('.new-quote');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');

const quotes = [
  {quote: `"The Heighest Climb. The Highest Clim is My Head"`, person: `Amar Jondhalekar`}, 
  {quote: `"Life is a lesson, you can do whatever you want."`, person: `Soham Marge`},
  {quote: `"Flying is a key, to reach a mountain"`, person: `Vedant Marge`},
  {quote: `"Flying is a key, to reach a mountain"`, person: `Vedant Marge`},
  {quote: `"The Heighest Climb. The Highest Clim is My Head"`, person: `Amar Jondhalekar`}, 
  {quote: `"Life is a lesson, you can do whatever you want."`, person: `Soham Marge`},
  {quote: `"Flying is a key, to reach a mountain"`, person: `Vedant Marge`},
  {quote: `"Flying is a key, to reach a mountain"`, person: `Vedant Marge`},
  {quote: `"The Heighest Climb. The Highest Clim is My Head"`, person: `Amar Jondhalekar`}, 
  {quote: `"Life is a lesson, you can do whatever you want."`, person: `Soham Marge`},
];

newQuote.addEventListener('click', function(){
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});