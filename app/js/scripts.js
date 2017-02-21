(function($) {
  "use strict";



  /*----------------- ContactForm ----------------------*/

  $(function() {
    var form = $('.contact-mailer'),
        // Get the messages div.
        formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function (e) {
      // Stop the browser from submitting the form.
      e.preventDefault();

      // Serialize the form data.
      var formData = $(form).serialize();

      // Submit the form using AJAX.
      $.ajax({
              type: 'POST',
              url: $(form).attr('action'),
              data: formData
      })
      .done(function (response) {
          // Make sure that the formMessages div has the 'success' class.
          $(formMessages).removeClass('error').addClass('success').fadeIn().delay(5000).fadeOut();
          // Set the message text.
          $(formMessages).text(response);

          if (response.responseText !== '') {
              $(formMessages).removeClass('error').addClass('success').text(response.responseText);
          }
      })
      .fail(function (data) {
          // Make sure that the formMessages div has the 'error' class.
          $(formMessages).removeClass('success').addClass('error').fadeIn().delay(5000).fadeOut();
          // Set the message text.
          if (data.responseText !== '') {
              $(formMessages).text(data.responseText);
          } else {
              $(formMessages).text('Oops! An error occured and your message could not be sent.');
          }
      });
    });
  });

  /*----------------- ContactForm  ----------------------*/


  // ======================================
  //    Smooth Scroll to element
  // ======================================
  $(function() {
    var $scrollTo = $('.scroll-to');
    $scrollTo.on('click', function(event){
      var $elemOffsetTop = $(this).data('offset-top');
      $('html').velocity("scroll", { offset:$(this.hash).offset().top-$elemOffsetTop, duration: 1500, easing:'easeInOutCubic', mobileHA: false});
      event.preventDefault();
    });
});

  // ======================================
  //    Smooth scroll to top button
  // ======================================
  $(function() {
    // Animated Scroll to Top Button
    var $scrollTop = $('.scroll-to-top-btn');
    if ($scrollTop.length > 0) {
      $(window).on('scroll', function(){
        if ($(window).scrollTop() > 600) {
          $scrollTop.addClass('visible');
        } else {
          $scrollTop.removeClass('visible');
        }
      });
      $scrollTop.on('click', function(e){
        e.preventDefault();
        $('html').velocity("scroll", { offset: 0, duration: 1500, easing:'easeInOutCubic', mobileHA: false });
      });
    };
});


  //------------------------------------- START: Mobile navigation setup ------------------------------------------------//

  $(function() {

    $(window).resize(function(){

      if ($(window).width() >= 768) {
        $('.trigger-nav').css('display', 'none');
        $('.nav').css('display', 'block');

        if ($('.trigger-nav').hasClass('open-nav')) {
          $('.trigger-nav').removeClass('open-nav');
        }
      } else if ($(window).width() < 768) {
        $('.trigger-nav').css('display', 'block');
        $('.nav').css('display', 'none');
      }

    });

    $('.trigger-nav').on('click', function() {

    	if (!$(this).hasClass('open-nav')) {
    		$(this).addClass('open-nav');
    		toggleNav(true);
    	} else {
    		$(this).removeClass('open-nav');
    		toggleNav(false);
    	}

    });

    function toggleNav(bool) {

    	if (bool === true) $('.nav').fadeIn(300);
    	else $('.nav').fadeOut(300);

    }

  });

  //------------------------------------- END: Mobile navigation setup ------------------------------------------------//


  //------------------------------------- START: .Scroll ------------------------------------------------//
    	$(function() {
      //caches a jQuery object containing the header element
      $(window).scroll(function() {
          var scroll = $(window).scrollTop();
          var nav = $('header');

          if (scroll > 190) {
                  nav.addClass('block-nav').fadeIn(1000);

              }
            else {
              nav.removeClass('block-nav').fadeIn(500);

          }

      });
    });
  //------------------------------------- END: .Scroll ------------------------------------------------//

  })(jQuery);
