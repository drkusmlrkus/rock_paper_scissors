//We need to player rock paper scissors five times
// At the end we need to report a winner
// rock, paper, scissors
//handle winning, losing, and tieing

// IOCE
// I - input(s) - what is going into the functions? i.e. What are the arguments? What types are they?
// O - output - what's coming out of the functions? i.e. what is the function returning? What is the type?
// C - constraints - limitations, i.e. memory, scalability, etc.
// E - Edge cases - unexpected inputs, error handling, etc.

// I - none
// O - return one of three strings - "Rock", "Paper", or "Scissors"
// C - skip
// E - none

const getComputerChoice = () => {
  // Generate a random number
  // Associate each number with one of the three choices
  // Return the chosen choice

  const randNum = Math.ceil(Math.random() * 3);

  // if (randNum === 1) {
  //  return "Rock";
  //  } else if (randNum === 2) {
  //   return "Scissors";
  //  } else if (randNum === 3) {
  //    return "Paper";
  //  }

  switch (randNum) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
    default:
      return "Scissors";
  }
};

let computerChoice = getComputerChoice();
console.log({ computerChoice });
