// Let's go!

//winners

const winningRows = [
    [topLeft, topMiddle, topRight],
    [middleLeft, middleMiddle, middleRight],
    [bottomLeft, bottomMiddle, bottomRight],
    [topLeft, middleLeft, bottomLeft],
    [topMiddle, middleMiddle, bottomMiddle],
    [topRight, middleRight, bottomRight],
    [topLeft, middleMiddle, bottomRight],
    [topRight, middleMiddle, bottomLeft]
]


// ids from HTML 
const resetButton = document.getElementById('resetButton')
const playerTurn = document.getElementById('playerTurn')
const scoreDisplay1 = document.getElementById('scoreDisplay1')
const scoreDisplay2 = document.getElementById('scoreDisplay2')
const displayWinner = document.getElementById('displayWinner')

let gameWon = false 

let currentPlayer = 'playerOne' // 'playerOne' || 'playerTwo'


// this pulls all of the tic-box classes & adds event listener
let boxes = document.querySelectorAll('.tic-box')
boxes = Array.from(boxes)
boxes.forEach(currentBox => {
    currentBox.addEventListener('click', () => gamePlay(currentBox))
})


// this works!
// const topLeft = document.getElementById('topLeft')

// // giving it a blank function so that it does not inadvertently call the gamePlay function
// topLeft.addEventListener('click', () => gamePlay(topLeft))



//Function to make game work (icons appear in box when clicked)/board state
// this works as is 
    function gamePlay(currentBox) {
        if (gameWon) {
            return
        }
       if (currentPlayer === 'playerOne') {
            currentBox.textContent = 'X'
            playerTurn.textContent = "Player 2's Turn"
            checkWin()
            currentPlayer = 'playerTwo'
       } else if (currentPlayer === 'playerTwo') {
            currentBox.textContent = 'O'
            playerTurn.textContent = "Player 1's Turn"
            checkWin()
            currentPlayer = 'playerOne'
       } // every time you click you go through this once
    }


//Function to declare winner

function checkWin() {
    
    // (if the function returns true for any of the array items returns true)
   let winner = winningRows.some(currentArray =>  {
        return currentArray.every(x => x.textContent === 'X') || currentArray.every(x => x.textContent === 'O')
        // if (currentArray[0].textContent === '' || currentArray[1].textContent === '' 
        // || currentArray[2].textContent === '') {
        //     return false
        // } console.log(currentArray[0].textContent)
        // return (currentArray[0].textContent === currentArray[1].textContent && 
        //     currentArray[1].textContent === currentArray[2].textContent)
    });  
    if (winner === true) {
        displayWinner.textContent = `${currentPlayer} won!`
        gameWon = true
    } else {
        checkDraw()
    }
        // maybe take out the alert and just make a text box???
        
    return winner
}

// function to check draw

function checkDraw() {
    // writing an every statement that checks if every box has text content
    let draw = boxes.every(box => box.textContent === 'X' || box.textContent === 'O')
    if (draw) {
        displayWinner.textContent = "It's a draw!"
    }
}

//Function to display player score

// //Function to reset page
// basically i need to make something that creates a conditional event listener 
function clearBoard() {
    boxes.map(boxItem => boxItem.textContent = '')
    displayWinner.textContent = ''
    playerTurn.textContent = ''
}

// boxes array loop through it and set the text content to empty 

// //Reset button event listener 
resetButton.addEventListener('click', clearBoard)