
var originalName = prompt( "whats your name" );
var checkUserName = function checkUserName( userName ){
    if( !userName || userName === " " ){
        userName = prompt( "come on jizz head name up" );
        checkUserName( userName );
    }
    else{
        originalName = userName;
    }
};
/* eslint-disable no-console */

checkUserName( originalName );
document.querySelector( "#subheader" ).textContent = "Hello, " + originalName;
