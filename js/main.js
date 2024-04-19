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

let p1Score = 0
let p2Score = 0

let gameWon = false

let currentPlayer = 'Player One' // 'playerOne' || 'playerTwo'


// this pulls all of the tic-box classes & adds event listener
let boxes = Array.from(document.querySelectorAll('.tic-box'))
// boxes = Array.from(boxes)
boxes.forEach(currentBox => {
    currentBox.addEventListener('click', (e) => gamePlay(e.target))
})


// this works!
// const topLeft = document.getElementById('topLeft')

// // giving it a blank function so that it does not inadvertently call the gamePlay function
// topLeft.addEventListener('click', () => gamePlay(topLeft))



//Function to make game work (icons appear in box when clicked)/board state
// this works as is 
function gamePlay(currentBox) {
    // console.log('clicked', currentBox, gameWon, currentBox.textContent)
    // console.log(currentPlayer)
    if (gameWon || currentBox.textContent !== "") {
        return
    }
    if (currentPlayer === 'Player One') {
        currentBox.textContent = 'X'
        playerTurn.textContent = "Player 2's Turn"
        checkWin()
        currentPlayer = 'Player Two'
    } else if (currentPlayer === 'Player Two') {
        currentBox.textContent = 'O'
        playerTurn.textContent = "Player 1's Turn"
        checkWin()
        currentPlayer = 'Player One'
    } // every time you click you go through this once
}


//Function to declare winner

function checkWin() {

    // (if the function returns true for any of the array items returns true)
    let winner = winningRows.some(currentArray => {
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
        scoreDisplay(currentPlayer)
    } else {
        checkDraw()
    }


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
function scoreDisplay(winner) {
    // parameter is a variable name, the argument is a valued pass
    //argument is in the actual calling of a function, parameter is definition
    if (winner === 'Player One') {
        p1Score = p1Score + 1
        // same as p1Score++
        scoreDisplay1.textContent = p1Score
    } else if (winner === 'Player Two') {
        p2Score++
        // same as p2Score = p2Score + 1
        scoreDisplay2.textContent = p2Score
    }
}

// //Function to reset page
// map returns a new array, forEach does not (we don't need a new array here)
function clearBoard() {
    gameWon = false;
    // console.log('did that reset', currentPlayer, gameWon)
    boxes.forEach(boxItem => boxItem.textContent = '')
    displayWinner.textContent = ''
    playerTurn.textContent = ''
}

// boxes array loop through it and set the text content to empty 

// //Reset button event listener 
resetButton.addEventListener('click', clearBoard) 