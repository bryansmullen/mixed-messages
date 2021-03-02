// import data
const { musicians, dontPlays, plays } = require("./_data.json");

/**
 * Print Message to Console
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
