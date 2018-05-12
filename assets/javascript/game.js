

// All my variable's

var guesses = [];

var playerguess = [];

var lifes = 10;

var wins = 0;

var loses = 0;

var underscore = [];

var words = ["ammil", "weald", "psithurism", "brivet", "petrichor",
            "dendrophile", "moonwake", "komorebi", "irusu", "ikigai","carlos", "gosick"];

// the extra 1000 randomizer!!
// a.k.a it randomizes the array of words
var random = words[Math.floor(Math.random() * words.length)];

console.log(random);


// This is the beginning of the function
        begin();

        function begin(){

// This loops around the 'random' variable to create the underscore necessary to that word
        for(var i = 0; i < random.length; i++)
        {
           underscore.push(" _ ");
           console.log(underscore);          
        }
// this displays the underscore on the screen
        document.getElementById("randomword").textContent = underscore;

// This is for the HTML to check lifes

        guesses = [];
        lifes = 10;
        document.getElementById("life").textContent ="Lifes Left: " + lifes;
    
    
        }

// =====================================================================================================
// =====================================================================================================
// =====================================================================================================
// =====================================================================================================
// =====================================================================================================
    
    function winsNLoses()
    {
        if(lifes === 0)
        {
            loses++;
            document.getElementById("loses").textContent = "Loses: " + loses;
         

            alert("you LOSE!!");
        }
        else if(underscore === random.length){
        wins++;
        document.getElementById("win").textContent = "Wins: " + wins;
        alert("you won bro");

        // for(var i = 0; i < underscore.length; i++) {
        //     if(random[i] == underscore[i]){

            }
        };
    
    document.getElementById("win").textContent = "Wins: " + wins;

// This part checks the key that the user is pressing
    document.onkeyup = function(event){

        playerguess = event.key;

// In this part what ever the user is pressing it will look into the random of word that was picked and see if 
// is correct
        if( random.indexOf(playerguess) > -1){
// In this part it is looping into the random word and also checking if the user guessed the right letter is pressed it will 
// display it in the correct area
            for(var d = 0; d < random.length; d++)
            {
             if(random[d] === playerguess)
             {
                 underscore[d] = playerguess
                 document.getElementById("randomword").textContent = underscore;
                 winsNLoses();
             }
            }

        }
        else{
            guesses.push(playerguess);
            lifes--;
            console.log(lifes);

            document.getElementById("guess").textContent = "Guesses made: " + guesses;     
            console.log(guesses);
            document.getElementById("life").textContent ="Lifes Left: " + lifes;
            winsNLoses();
            
        }
    }
   



        
        
    

    
    


    












