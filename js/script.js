/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * `quotes` array
 * The array holds several objects which store information on quotes.
 * Each object holds a quote and the source of the quote.
 * Some of the objects hold further information such as citaion and/or the year the quote originated from.
***/
const quotes = [
  {quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", source: "Mother Teresa"},
  {quote: "Always remember that you are absolutely unique. Just like everyone else.", source: "Margaret Mead"},
  {quote: "The future belongs to those who believe in the beauty of their dreams", source: "Eleanor Roosevelt"},
  {quote: "It is during our darkest moments that we must focus to see the light.", source: "Aristotle"},
  {quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", source: "Ralph Waldo Emerson"},
  {quote: "Mama always said life was like a box of chocolates: You never know what you’re gonna get.", source: "Forrest Gump (Tom Hanks)", year: 1994},
  {quote: "To infinity—and beyond!", source: "Buzz Lightyear (Tim Allen)", citation: "Toy Story", year: 1996},
  {quote: "We’re all pretty bizarre. Some of us are just better at hiding it, that’s all.", source: "Andrew Clark (Emillio Estevez)", citation: "The Breakfast Club"},
  {quote: "Just keep swimming", source: "Dory (Ellen Degeneres)", citation: "Finding Nemo"},
  {quote: "There's no place like home.", source: "Dorothy (Judy Garland)", citation: "Wizard of Oz", year: 1939},
  {quote: "I'm king of the world!", source: "Jack Dawson (Leonardo DiCaprio)", citation: "Titanic"},
  {quote: "I feel the need - the need for speed!", source: "Maverick (Tom Cruise)", citation: "Top Gun", year: 1986},
  {quote: "Adventure is out there.", source: "Charles Muntz (Christopher Plummer)", citation: "Up!"}
];


/***
 * `getRandomQuote` function
 * Picks one quote at random from the quotes array.
 * The function uses Math.random to produce a random number between the quotes array index.
 * To find how many objects are in the quotes array I use the length property & then minus 1 from the result. This is to account for the index starting at 0.
 * @returns {object} - One quote from the quotes array.
***/
function getRandomQuote() {
  const quotesIndexNumbers = quotes.length - 1;
  const randomNumber = Math.floor(Math.random() * quotesIndexNumbers);
  return quotes[randomNumber];
}

/***
 * `printQuote` function
 * The function gets a random quote & then runs a series of if statements to identify what information the object holds.
 * The function firstly calls the getRandomQuote function.
 * A variable then stores the basic html which will feature in all instances of the if statements.
 * A series of if statements are then run to determin what additional information needs to be inserted into the html string.
 * @returns the document.getElementById method to add my HTML.
***/
function printQuote() {
  const quote = getRandomQuote();
  const basicHTMLString = `<p class="quote"> ${quote.quote} </p> <p class="source"> ${quote.source}`;
  let html = ''
  if (quote.citation && quote.year) {
    html = `${basicHTMLString} <span class="citation">${quote.citation}</span><span class="year">${quote.year}</span></p>`;
  } else if (quote.year) {
      html = `${basicHTMLString} <span class="year">${quote.year}</span> </p>`;
  } else if (quote.citation) {
      html = `${basicHTMLString} <span class="citation">${quote.citation}</span> </p>`;
  } else {
    html = `${basicHTMLString}</p>`;
  }
  return document.getElementById('quote-box').innerHTML = html;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
