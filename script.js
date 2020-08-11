var back = document.getElementById("tic");

const objModel = {
  "one": undefined,
  "two": undefined,
  "three": undefined,
  "four": undefined,
  "five": undefined,
  "six": undefined,
  "seven": undefined,
  "eight": undefined,
  "nine": undefined,
};

//Appending 9 Span tags inside the grid
const createSpan = (id) => {
  let createSpan = document.createElement("span");
  createSpan.id = id;
  createSpan.setAttribute("class", "spanSeg");
  createSpan.setAttribute("onclick", `XO(this)`);
  back.appendChild(createSpan);
};

createSpan("one");
createSpan("two");
createSpan("three");
createSpan("four");
createSpan("five");
createSpan("six");
createSpan("seven");
createSpan("eight");
createSpan("nine");

//Div for displaying the Output of the game
let bodyofDoc = document.getElementById("body");
let divis = document.createElement("div");
divis.id = "overlay";
bodyofDoc.append(divis);

let buttons = document.createElement("button");
buttons.innerHTML = "Play Again";
buttons.id = "buttons";
buttons.setAttribute("onClick", "restart()");
buttons.setAttribute("type", "button");

let player = document.createElement("P");
player.id = "player";
player.innerHTML = "Player 1 - O  Player 2";
divis.appendChild(player);

// Declaring count as a Global variable - need for checking inputs
count = 0;

//Sentence for displaying when game is over
sentence = "Tie!!";

const restart = () => {
  window.location.reload();
};

function matchCheck(par) {
  if (
    (objModel["one"] == par &&
      objModel["two"] == par &&
      objModel["three"] == par) ||
    (objModel["one"] == par &&
      objModel["four"] == par &&
      objModel["seven"] == par) ||
    (objModel["one"] == par &&
      objModel["five"] == par &&
      objModel["nine"] == par) ||
    (objModel["two"] == par &&
      objModel["five"] == par &&
      objModel["eight"] == par) ||
    (objModel["three"] == par &&
      objModel["six"] == par &&
      objModel["nine"] == par) ||
    (objModel["four"] == par &&
      objModel["five"] == par &&
      objModel["six"] == par) ||
    (objModel["seven"] == par &&
      objModel["eight"] == par &&
      objModel["nine"] == par) ||
    (objModel["three"] == par &&
      objModel["five"] == par &&
      objModel["seven"] == par)
  ) {
    if (par == "X") {
      sentence = "Player2 wins";
      divis.innerHTML = sentence;
      divis.setAttribute("style", "visibility:visible");
    } else {
      sentence = "Player1 wins";
      divis.innerHTML = sentence;
      divis.setAttribute("style", "visibility:visible");
    }
  }
  if (count >= 9) {
    count = 0;

    divis.innerHTML = sentence;
    divis.setAttribute("style", "visibility:visible");
  }
  divis.append(buttons);
}

//Alerting when they are trying to change the input of whats already provided
function cannotChange(sp) {
  if (sp.innerHTML == "X" || sp.innerHTML == "O") {
    alert("A real Man/Woman never goes back on his word!!🤔🤔");
    return true;
  }
}

function XO(sp) {
  //Checking whether it already has data or not
  if (cannotChange(sp)) return;

  count++;
  let variables = "X";

  //Determining Player1 or 2
  if (count % 2 !== 0) variables = "O";
  else variables = "X";

  //Displaying X or O
  sp.innerHTML = variables;
  objModel[sp.id] = variables;

  //Checking whether the game is over or not
  matchCheck(variables);
}
