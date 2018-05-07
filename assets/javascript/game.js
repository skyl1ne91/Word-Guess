
var guesses = [];

var player = [];

var lifes = 10;

var wins = 0;

var loses = 0;

var underscore = [];

var words = ["ammil", "weald", "psithurism", "brivet", "petrichor",
            "dendrophile", "moonwake", "komorebi", "irusu", "ikigai","carlos", "gosick"];


random = words[Math.floor(Math.random() * words.length)];
var justin = random.split("");
console.log(justin);



begin();


console.log(underscore);

    function begin(){


        for(var i = 0; i < random.length; i++)
        {
           underscore.push(" _ ");
            
        }

        document.getElementById("randomword").textContent = underscore;



    }



    document.getElementById("randomword").innerHTML= underscore;
    document.getElementById("life").innerHTML= "Lifes Left: " + lifes;
    document.getElementById("win").innerHTML= "Wins : " + wins;
    document.getElementById("loses").innerHTML= "Loses: " +loses;
    document.getElementById("guess").innerHTML= "Guesses: " + guesses;
    document.getElementById("");


    // this part is checking and saving the user guesses
    

    document.onkeyup = function(event) {

         player = event.key;

        if(justin.indexOf(player) > -1){
        
            for( var b = 0; b < justin.length; b++){
            
                

            }




        }       
        else{
            
            guesses.push(player);
            console.log(guesses);


        }
     

            }
            
        
        
    

    
    


    












