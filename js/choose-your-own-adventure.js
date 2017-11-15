var story = {
    "start": "You're on an island. Would you like to leave or stay?",
    "leave": "there is a canoe you get in. you paddle away from the island. you meet a whale. would you like to say hello or ignore?",
    "stay": " as the sun sets you are eaten by giant ants. good bye.",
    "hello": " the whale smiles says 'hello' and ask you to pet him. do you pet him yes or no?",
    "yes": "something",
    "no": "the whale sniffs his nose and smashes you with his tale. goodbye."

};


var runStory = function runStory(){
    var choice = prompt( story.start )  ;

    if( choice === "leave" ){
        prompt( story[ choice ] );
        if( choice === "hello" ){
            prompt( story[choice] );
        }
        else if( choice === "ignore" ){
            document
                .querySelector( "#output" )
                .textContent = story[choice];
        }
        else{
            runStory( choice );
        }
    }
    else if( choice === "stay" ){
        document
            .querySelector( "#output" )
            .textContent = story[choice];
    }
    else{
        runStory();
    }
};

runStory();
