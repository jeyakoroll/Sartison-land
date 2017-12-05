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


});