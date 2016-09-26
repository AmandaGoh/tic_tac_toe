document.addEventListener('DOMContentLoaded', init)

function init () {
  var cards = document.querySelectorAll('.card')
  var currentPlayer = 1

  var score = 0
  var clicks = 0

  for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', boxClick)
  }

  function boxClick() {
    if (currentPlayer === 1) {
      this.classList.add('clickx')
      this.textContent = score + 5
      clicks += 1
    } else {
      this.classList.add('clicko')
      this.textContent = score - 5
      clicks += 1
    }
  }


  // var gameWon = checkWin()
  //
  // if(gameWon) {
  //     alertWinner()
  //   } else {
  //    switchPlayer()
  //   }

    function switchPlayer () {
      if (currentPlayer === 1) {
        currentPlayer = 2
      } else {
        currentPlayer = 1
      }
    }


  // purely just checked all box scores
  function checkWin() {
    var boxOne = document.querySelector('.one')
    var boxTwo = document.querySelector('.two')
    var boxThree = document.querySelector('.three')
    var boxFour = document.querySelector('.four')
    var boxFive = document.querySelector('.five')
    var boxSix = document.querySelector('.six')
    var boxSeven = document.querySelector('.seven')
    var boxEight = document.querySelector('.eight')
    var boxNine = document.querySelector('.nine')

    var ValueBoxOne = parseInt(boxOne.innerHTML,10)
    var ValueBoxTwo = parseInt(boxTwo.innerHTML,10)
    var ValueBoxThree = parseInt(boxThree.innerHTML,10)
    var ValueBoxFour = parseInt(boxFour.innerHTML,10)
    var ValueBoxFive = parseInt(boxFive.innerHTML,10)
    var ValueBoxSix = parseInt(boxSix.innerHTML,10)
    var ValueBoxSeven = parseInt(boxSeven.innerHTML,10)
    var ValueBoxEight = parseInt(boxEight.innerHTML,10)
    var ValueBoxNine = parseInt(boxNine.innerHTML,10)
    // var Combi1= parseInt(boxOne + boxTwo + boxThree, 10)

    var winCombiOne = (ValueBoxOne + ValueBoxTwo + ValueBoxThree)
    var winCombiTwo = (ValueBoxFour + ValueBoxFive + ValueBoxSix)
    var winCombiThree = (ValueBoxSeven + ValueBoxEight + ValueBoxNine)
    var winCombiFour = (ValueBoxOne + ValueBoxFour + ValueBoxSeven)
    var winCombiFive = (ValueBoxTwo + ValueBoxFive + ValueBoxEight)
    var winCombiSix = (ValueBoxThree + ValueBoxSix + ValueBoxNine)
    var winCombiSeven = (ValueBoxOne + ValueBoxFive + ValueBoxNine)
    var winCombiEight = (ValueBoxThree + ValueBoxFive + ValueBoxSeven)

    if (winCombiOne === 15 || winCombiTwo === 15 || winCombiThree === 15 || winCombiFour === 15 || winCombiFive === 15 || winCombiSix === 15 || winCombiSeven === 15 || winCombiEight === 15) {
      alert('Player 1 won!')
      }
      else if (winCombiOne === -15 || winCombiTwo === -15 || winCombiThree === -15 || winCombiFour === -15 || winCombiFive === -15 || winCombiSix === -15 || winCombiSeven === -15 || winCombiEight === -15) {
        alert('Player 2 won!')
    // return // true or false;
      }
      else {
        console.log('test')
        // checkDraw()
      }
    }


    // function checkDraw (){
    //   if (clicks === 9){
    //     alert('This game is a draw!')
    //   }
    //   else {
    //     boxClick()
    //   }
    // }



}


//zero-sum game (pure competition)
// Player 1 (X) will +5 pts in each box click
// Player 2 (X) will -5pts in each box clicked
//
// If rows of boxes tally up to score +15pts player 1 wins.
// If rows of boxes tally up to score -15pts player 2 wins.
