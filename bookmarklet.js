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
          if (urls.indexOf($(this).css('background-image').substr(5, ($(this).css('background-image').length-7)) === -1) {
            urls.push($(this).css('background-image').substr(5, ($(this).css('background-image').length-7));
          }
          
      }
      
  });
    
    for (i=0; i<urls.length; i++) {
          var a = "<div style='margin: 10px; float: left;'><img style='max-width: 100px;' src='" + urls[i] +"'><a style='background: #000; border-radius: 10px; padding: 10px; margin: 10px' href='" + urls[i] + "' download='img.jpg'>Download Image</a></div>";
        $('body').append(a);
      }
}
