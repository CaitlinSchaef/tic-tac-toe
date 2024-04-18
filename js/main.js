// Let's go!


const winningMessage = () => `Player ${currentPlayer} won the game!`
const drawMessage = () => `It's a draw!`
const resetButton = document.getElementById('resetButton')
const playerTurn = document.getElementById('playerTurn')
const scoreDisplay1 = document.getElementById('scoreDisplay1')
const scoreDisplay2 = document.getElementById('scoreDisplay2')
let currentPlayer = 'playerOne' // 'playerOne' || 'playerTwo'

let boxes = document.querySelectorAll('.tic-box')
boxes.forEach(currentBox => {
    currentBox.addEventListener('click', () => gamePlay(currentBox))
})


// this works!
// const topLeft = document.getElementById('topLeft')

// // giving it a blank function so that it does not inadvertently call the gamePlay function
// topLeft.addEventListener('click', () => gamePlay(topLeft))



//Function to switch between player control of the screen

    // function whoseTurn() {
    //     currentPlayer = {
    //         if(player1) {
    //         ! player2
    //         } else if (player2) {
    //             ! player1
    //         }
    //     } return currentPlayer
    //     console.log(currentPlayer)
    // }


//Function to display player turn

    // function displayTurn() {

    // }

//Function to make game work (icons appear in box when clicked)/board state

    function gamePlay(currentBox) {
        console.log('WORK')
        console.log(currentBox)
       if (currentPlayer === 'playerOne') {
        currentBox.textContent = 'X'
        currentPlayer = 'playerTwo'
       } else if (currentPlayer === 'playerTwo') {
            currentBox.textContent = 'O'
            currentPlayer = 'playerOne'
       } 
    }

//Function to display player score

//Function to declare winner

//Function to reset page


