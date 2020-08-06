var back = document.getElementById('tic')

//Appending 9 Span tags inside the grid
const createSpan = ( id ) => {
    let createSpan =  document.createElement('span')
    createSpan.id = id
    createSpan.setAttribute('class','spanSeg')
    createSpan.setAttribute('onclick',`XO(this)`)
    back.appendChild(createSpan);
}

createSpan('one');
createSpan('two');
createSpan('three');
createSpan('four');
createSpan('five');
createSpan('six');
createSpan('seven');
createSpan('eight');
createSpan('nine');

//Div for displaying the Output of the game
let bodyofDoc = document.getElementById('body')
let divis = document.createElement('div')
divis.id = 'overlay'
bodyofDoc.append(divis);

let buttons = document.createElement('button')
buttons.innerHTML='Play Again'
buttons.id = 'buttons'
buttons.setAttribute('onClick','restart()')
buttons.setAttribute('type','button')

let player =  document.createElement('P')
player.id = 'player'
player.innerHTML ='Player 1 - O  Player 2'
divis.appendChild(player)

// Declaring count as a Global variable - need for checking inputs
let one,two,three,four,five,six,seven,eight,nine 
count  = 0

//Sentence for displaying when game is over
sentence = 'Tie!!'

const restart = () => {
  window.location.reload()
}

function matchCheck(par){

    if (( one == par && two == par && three == par) ||
    ( one == par && four == par && seven == par) ||
    ( one == par && five == par && nine == par) ||
    ( two == par && five == par && eight == par) ||
    ( three == par && six == par && nine == par) ||
    ( four == par && five == par && six == par) ||
    ( seven == par && eight == par && nine == par) ||
    ( three == par && five == par && seven == par) 
    )
    {
        if(par == 'X'){
            sentence = 'Player2 wins';
            divis.innerHTML = sentence
            divis.setAttribute('style', 'visibility:visible')
        }
        else{
            sentence = 'Player1 wins';
            divis.innerHTML = sentence
            divis.setAttribute('style', 'visibility:visible')
        }
    }
    if(count >= 9){
       count = 0

       divis.innerHTML = sentence
       divis.setAttribute('style', 'visibility:visible')
   }
   divis.append(buttons);
}

//Alerting when they are trying to change the input of whats already provided
function cannotChange(sp){

    if(sp.innerHTML == 'X' || sp.innerHTML == 'O')
    {
        alert('A real Man/Woman never goes back on his word!!🤔🤔');
        return true;
    }

} 

const variableUpdate = (id,variables) => {

    switch (id) {
        case "one":
          one = variables
          break;
        case "two":
          two = variables
          break;
        case "three":
          three = variables
          break;
        case "four":
          four = variables
          break;
        case "five":
          five = variables
          break;
        case "six":
          six = variables
          break;
        case  "seven":
          seven = variables;
          break;
        case  "eight":
            eight = variables;
            break;
        case  "nine":
            nine = variables;            
      }

}

function XO(sp) {
    console.log(sp.id)
    //Checking whether it already has data or not
   if(cannotChange(sp))
   return;

    count++;
    let variables = 'X'

    //Determining Player1 or 2
    if(count%2 !== 0)
        variables = 'O'
    else
        variables = 'X'

    //Displaying X or O
   sp.innerHTML = variables;
   variableUpdate(sp.id,variables)

   //Checking whether the game is over or not
   matchCheck(variables)
}
