
//Initialize Score

let userScore = 0;
let computerScore =0;

// Create  a function to update the score

function updateScores() {
    document.getElementById('userScore').textContent = userScore;
    document.getElementById('computerScore').textContent = computerScore;
}


// create a function to choose random choice for computer
function computer(){
    //create array to choose element
    var a = ['r','p','s'];
    // create random method
    var b = Math.floor(Math.random()*3);
    return a[b];
}
//call a function. Pass the value of choice
function user(x) {
    document.getElementById('uc').innerHTML= x;
    //storing computer choice element in  c 
    var c = computer();
    document.getElementById('cc').innerHTML = c;
     
    // result: Possibility of user to win 
    switch(x+c){
        case 'rs':
            case 'pr':
                case 'sp':
                    document.getElementById('winner').innerHTML = "User won the game";
                    userScore++;  //Increment user score
                    break;
    // chances of computer to win the game
        case 'sr':
            case 'rp':
                case 'ps':
                    document.getElementById('winner').innerHTML = 'Computer won the game';
                    computerScore++;  // Increment computer score
                    break;                
    // chance of getting draw
         case 'rr':
            case 'pp':
                case 'ss':
                    document.getElementById('winner').innerHTML =' Game Draw'
                    break;
    }

    updateScores(); 
}

// restart button event listner
const restartButton = document.getElementById("restart");
restartButton.addEventListener("click", ()=> {
    //clear the game result and reset scores
    document.getElementById('uc').innerHTML = "";
    document.getElementById('cc').innerHTML = "";
    document.getElementById('winner').innerHTML = "";
    userScore = 0;
    computerScore = 0;
    updateScores ();
});

