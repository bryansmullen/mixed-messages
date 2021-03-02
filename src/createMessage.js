/**
 * Create message module - pulls in data from external file and constructs a message from the data
 * @module createMessage
 */

// import data
const { musicians, dontPlays, plays } = require("../_data.json");

/**
 * createMessage - returns a string of format 'In the words of the jazz great, ${musician}, don't play ${dontPlay}, play ${play}'
 * @returns {void}
 */
const createMessage = () => {
  // message components
  const musician = musicians[Math.floor(Math.random() * musicians.length)];
  const dontPlay = dontPlays[Math.floor(Math.random() * dontPlays.length)];
  const play = plays[Math.floor(Math.random() * plays.length)];

  //    construct message
  return `In the words of the jazz great, ${musician}, don't play ${dontPlay}, play ${play}`;
};

module.exports = createMessage;
