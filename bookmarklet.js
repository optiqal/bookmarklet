if (!($ = window.jQuery)) { // typeof jQuery=='undefined' works too
    script = document.createElement( 'script' );
   script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'; 
    script.onload=releasetheKraken;
    document.body.appendChild(script);
} 
else {
    releasetheKraken();
}
 
function releasetheKraken() {
   console.log("BOOTED UP BABY");
    $('div').each( function() {
      if ( $(this).css('background-image').indexOf('.jpg') > 1 ) {
          console.log("FOUND ONE");
      }
  });
}
