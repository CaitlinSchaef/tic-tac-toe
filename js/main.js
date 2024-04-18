// Let's go!


const winningMessage = () => `Player ${currentPlayer} won the game!`
const drawMessage = () => `It's a draw!`
const resetButton = document.getElementById('resetButton')
const playerTurn = document.getElementById('playerTurn')
const scoreDisplay1 = document.getElementById('scoreDisplay1')
const scoreDisplay2 = document.getElementById('scoreDisplay2')


let currentPlayer = 'playerOne' // 'playerOne' || 'playerTwo'


// this pulls all of the tic-box classes & adds event listener
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


//Function to make game work (icons appear in box when clicked)/board state
// this works as is 
    function gamePlay(currentBox) {
        console.log('WORK')
        console.log(currentBox)
       if (currentPlayer === 'playerOne') {
        currentBox.textContent = 'X'
        playerTurn.textContent = "Player 1's Turn"
        currentPlayer = 'playerTwo'
       } else if (currentPlayer === 'playerTwo') {
            currentBox.textContent = 'O'
            playerTurn.textContent = "Player 2's Turn"
            currentPlayer = 'playerOne'
       } // every time you click you go through this once
       checkWin()
       checkDraw()
    }


//Function to declare winner

function checkWin() {
    //if winning array returns true
    
   // window.alert(`${currentPlayer} won!`)
}

// fucntion to check draw

function checkDraw() {

}

//Function to display player score

//Function to reset page


