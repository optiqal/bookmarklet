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
    let urls = [];
    
    $('div').each( function() {
      if ( $(this).css('background-image').indexOf('.jpg') > 1 ) {
          console.log("FOUND ONE");
          urls.push($(this).css('background-image'));
      }
      for (i=0; i<urls.length; i++) {
        var a = $("<a>")
            .attr("href", urls[i])
            .attr("download", "img" + 1 + ".jpg")
            .appendTo("body");
      }
  });
}
