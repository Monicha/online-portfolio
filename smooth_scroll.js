// Select all links with hashes
$('a[href*="#"]').click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Find the element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // The question mark brings about a question : Does a scroll target exist?
      if (target.length) {
        // The "prevent default" only happens if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // This is a callback after the animation
          // This is where the focus changes!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // This checks if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements which arent focused
            $target.focus(); // Resetting the focus 
          };
        });
      }
    }
  });
