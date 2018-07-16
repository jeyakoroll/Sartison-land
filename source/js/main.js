$(document).ready(function() {
	var teamSlider = $('.team__slider'),
			transportSlider = $('.transport__slider');

	// team gallery
	 teamSlider.owlCarousel({
		loop: true,
	  margin: 200,
	  items: 1,
	  center: false,
	  dots: false,
	  nav: true,
	  autoWidth: true,
	  navContainer: '.team__slider-arr',
    responsiveClass:true,
    responsive:{
	      0:{
					items: 1,
					margin: 100
	      },
				768:{
			    margin: 20,
			    items: 2
	      },
	      992:{
			    margin: 0,
			    items: 3
	      }
    }
  });

	 transportSlider.owlCarousel({
		loop: true,
	  margin: 20,
	  items: 1,
	  center: false,
	  dots: false,
	  nav: true,
	  autoWidth: true,
	  navContainer: '.transport__slider-arr',
    responsiveClass:true,
    responsive:{
	      0:{
					items: 1,
					margin: 100
	      },
	      480:{
			    margin: 50,
			    center: true,
			    items: 1
	      },
	      768:{
			    margin: 20,
			    items: 2
	      },
	      992:{
			    margin: 0,
			    items: 3
	      }
    }
  });

	// scroll function call
  $('.header__nav-link').on('click', function(e) {
    e.preventDefault();

    showSection($(this).attr('href'), true); 
  });

  showSection(window.location.hash, false);

  function showSection(section, isAnimate) {
  var 
      direction = section.replace(/#/, ''),
      reqSection = $('.section').filter('[data-section="' + direction + '"]'),
      reqSectionPos = reqSection.offset().top + 30;

      if (isAnimate) {
        $('body, html').animate({scrollTop: reqSectionPos}, 400);
      } else {
        $('body, html').scrollTop(reqSectionPos);
      }
	}

});