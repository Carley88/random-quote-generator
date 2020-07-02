/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
const quotes = [
  {quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", source: "Mother Teresa"},
  {quote: "Always remember that you are absolutely unique. Just like everyone else.", source: "Margaret Mead"},
  {quote: "The future belongs to those who believe in the beauty of their dreams", source: "Eleanor Roosevelt"},
  {quote: "It is during our darkest moments that we must focus to see the light.", source: "Aristotle"},
  {quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", source: "Ralph Waldo Emerson"},
  {quote: "Mama always said life was like a box of chocolates: You never know what you’re gonna get.", source: "Forrest Gump"},
  {quote: "To infinity—and beyond!", source: "Buzz Lightyear"},
  {quote: "We’re all pretty bizarre. Some of us are just better at hiding it, that’s all.", source: "Andrew"},
  {quote: "Just keep swimming", source: "Dory"}
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  const quotesIndexNumbers = quotes.length - 1;
  const randomNumber = Math.floor(Math.random() * quotesIndexNumbers);
  return quotes[randomNumber]
}

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
