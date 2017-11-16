
var story = {
    "start": {
        "text": "You're on an island. Would you like to leave or stay?",
        "choices": [ "leave","stay" ]
    },
    "leave": {
        "text": "there is a canoe you get in. you paddle away from the island. you meet a whale. would you like to say hello or ignore?",
        "choices": [ "hello","ignore" ]
    },
    "stay": {
        "text": " as the sun sets you are eaten by giant ants. good bye.",
    },
    "hello": {
        "text": " the whale smiles says 'hello' and ask you to pet him. do you pet him yes or no?" ,
        "choices": [ "yes","no" ]

    },
    "ignore": {
        "text": "the whale eats you.goodbye"
    },
    "yes": {
        "text": "the whale offers you candy. do you take one peice or two?",
        "choices": [ "one","two" ]
    },
    "no": {
        "text": "the whale sniffs his nose and smashes you with his tale. goodbye.",
    },
    "one": {
        "text": "the whale says 'You're a nice person' and gives you a bar of gold and takes you home . goodbye.",

    },
    "two": {
        "text": "the whale says 'greedy greedy' tips your boat and you die goodbye."
    }


};


var runStory = function runStory( branch ){
    var chapter = story[branch];
    var choices = chapter.choices;
    var choice ;


    if( choices ){
        choice = prompt( chapter.text );

        if( choice === choices[0] || choice === choices[1] ){
            runStory( choice );
        }
        else{
            runStory( branch );
        }
    }
    else{
        document
            .querySelector( "#output" )
            .textContent = chapter.text;
    }
};

runStory( "start" );
