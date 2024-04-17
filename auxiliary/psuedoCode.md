<!-- 
Important Info:

Sun:
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
  <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg>

<i class="bi bi-sun-fill"></i>

Moon: 
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
</svg>

<i class="bi bi-moon-fill"></i>



    <div class="grid text-center" style="--bs-gap: .25rem 1rem;">
                  <div class="row">
                    <div class="g-col-4">Row one left box</div>
                    <div class="g-col-4">Row one middle box</div>
                    <div class="g-col-4">Row one right box</div>
                  </div>

                  <div class="row">
                    <div class="g-col-4">Row two left box</div>
                    <div class="g-col-4">Row two middle box</div>
                    <div class="g-col-4">Row two right box</div>
                  </div>

                  <div class="row">
                    <div class="g-col-4">Row three left box</div>
                    <div class="g-col-4">Row three middle box</div>
                    <div class="g-col-4">Row three right box</div>
                  </div>
                </div>
 -->

 <!--

  <div class="container d-flex justify-content-center align-content-center" id="pageContainer">
    <div class="row d-flex align-content-center">
      <div class="col d-flex justify-content-center align-content-center">
        <div class="container d-flex" id="headerContainer">
          
        </div>
        <div class="container" id="playerTurnContainer">
          
        </div>
        <div class="container" id="gameContainer">
          
        </div>
        <div class="container" id="resetContainer">

        </div>
      </div>
    </div>
  </div>



    <div class="container p-5 d-flex align-items-center justify-content-center">
      <div class="row align-items-center justify-content-center">
        <div class="col align-items-center justify-content-center">
          <div class="row align-items-center" id="row1HEAD">
            <div class="col justify-content-center text-center" id="Header">
              <h1>TIC-TAC-TOE</h1>
            </div>
          </div>
          <br>
          <br>
          <div class="row justify-content-center" id="row2TURN">
            <div class="col justify-content-center text-center" id="WhoseTurn">
              <div class="box">
                <span class="border border-dark" id="turnBox"> Turn: Player 1 </span>
              </div>
            </div>
          </div>
          <br>
          <br>
          <div class="row justify-content-center align-items-center" id="row3GAME">
            <div class="border border-primary d-flex">
            <div class="col-3" id="Player1">
              <div class="box">
                <span class="border border-dark" id="turnBox"> Player 1 Score </span>
              </div>
            </div>
            <div class="col-6" id="Grid">
              <div class="box text-center">
                <div class="row" id="topRow">
                  <div class="col-4">
                    top left
                  </div>
                  <div class="col-4">
                    top middle
                  </div>
                  <div class="col-4">
                    top right
                  </div>
                </div>
                <div class="row" id="middleRow">
                  <div class="col-4">
                    middle left
                  </div>
                  <div class="col-4">
                    middle middle
                  </div>
                  <div class="col-4">
                    middle right
                  </div>
                </div>
                <div class="row" id="bottomRow">
                  <div class="col-4">
                    bottom left
                  </div>
                  <div class="col-4">
                    bottom middle
                  </div>
                  <div class="col-4">
                    bottom right
                  </div>
                </div>
                </div>
                </div>
                <div class="col-3 justify-content-center" id="Player2">
                  <div class="box">
                    <span class="border border-dark" id="turnBox"> Player 2 Score </span>
                  </div>
              </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
          <br>
          <div class="row justify-content-center" id="row4RESET">
            <div class="col text-center justify-content-center" id="col">
              <div class="box">
                <button class="button">Reset Board</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



-->