$(document).ready(function() {

    // Storing variables for later use in functions
    var silver = Math.floor(Math.random() * 11 + 1);
    var green = Math.floor(Math.random() * 11 + 1);
    var purple = Math.floor(Math.random() * 11 + 1);
    var yellow = Math.floor(Math.random() * 11 + 1);
    var userTotal = 0;
    var wins = 0;
    var losses = 0;
    var Random;

    // Selects a random number at the start of the game 
    var Random = Math.floor(Math.random() * 120 + 19)

    // adding random number
    $('#randomNumber').html(Random);

    //  variables for score board
    $('#numWins').html(wins);
    $('#numLosses').html(losses);
    
    // Resets the game
    function reset() {
        Random = Math.floor(Math.random() * 120 + 19);
        console.log(Random);
        $('#randomNumber').html(Random);
        silver = Math.floor(Math.random() * 12 + 1);
        green = Math.floor(Math.random() * 12 + 1);
        purple = Math.floor(Math.random() * 12 + 1);
        yellow = Math.floor(Math.random() * 12 + 1);
        userTotal = 0;
        $('#totalScore').html(userTotal);
    }

    // Adds the wins to the userTotal
    function winner() {
        alert("WINNER");
        wins++;
        $('#numWins').html(wins);
        reset();
    }
    // Adds the losses to the userTotal
    function loser() {
        alert("LOSER");
        losses++;
        $('#numLosses').html(losses);
        reset()
    }

     //sets win/lose conditions
    function endGame() {
     if (userTotal === Random) {
            winner();
        } else if (userTotal > Random) {
            loser();
        }
    }

    // Sets up click for jewels
    $('#silver').on('click', function() {
        userTotal = userTotal + silver;
        console.log("New userTotal= " + userTotal);
        $('#totalScore').html(userTotal);
         
         endGame();
     })

    $('#green').on('click', function() {
        userTotal = userTotal + green;
        console.log("New userTotal= " + userTotal);
        $('#totalScore').html(userTotal);

        endGame();
    })

    $('#purple').on('click', function() {
        userTotal = userTotal + purple;
        console.log("New userTotal= " + userTotal);
        $('#totalScore').html(userTotal);

        endGame();
    })

    $('#yellow').on('click', function() {
        userTotal = userTotal + yellow;
        console.log("New userTotal= " + userTotal);
        $('#totalScore').html(userTotal);

        endGame();

    });
});