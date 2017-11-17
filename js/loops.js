/* eslint-disable complexity, no console */
var fizzbuzzResult = "";


var fizzBuzz = function fizzBuzz( num ){
    if( num % 3 === 0 && num % 5 === 0 ){
        fizzbuzzResult += ", fizzbuzz" ;
    }
    else if( num % 3 === 0 ){
        fizzbuzzResult += ", fizz" ;
    }
    else if( num % 5 === 0 ){
        fizzbuzzResult += ", buzz" ;
    }
    else{
        fizzbuzzResult += ", " + num;
    }
};

var fizzBuzzLightYear = function fizzBuzzLightYear( limit ){
    for( var i = 1; i < limit; i++ ){
        fizzBuzz( i );
    }
};

fizzBuzzLightYear( 50 );
document
    .querySelector( "#fizzBuzz" )
    .textContent = fizzbuzzResult;
