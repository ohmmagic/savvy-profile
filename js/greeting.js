var hello = "hello";
var userName = prompt( "whats your name" );
var checkUserName = function checkUserName(){
    if( !userName || userName === " " ){
        userName = prompt( "come on jizz head name up" );
        checkUserName();
    }
};
/* eslint-disable no-console */

checkUserName();

alert( hello + " " + userName );
