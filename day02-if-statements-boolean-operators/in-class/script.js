var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(randomDecimal);

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  var diceRoll1 = rollDice();
  var diceRoll2 = rollDice();
  console.log(diceRoll1, diceRoll2);
  var totalDice = diceRoll1 + diceRoll2;
  if (input == diceRoll1 || input == diceRoll2 || totalDice == 11) {
    var myOutputValue = "You win";
  } else {
    var myOutputValue = "try again!";
  }
  return myOutputValue;
};

var hawkerFoodCategorisationMain = function (input) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
  if (input == "chicken rice" || input == "nasi lemak") {
    myOutputValue = "rice";
  } else if (input == "laksa" || input == "hokkien mee") {
    myOutputValue = "noodles";
  } else myOutputValue = "others";
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
