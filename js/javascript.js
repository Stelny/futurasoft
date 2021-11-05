$(document).ready(function () {

    function thisClass(element, defaults = 'active') {
      if ($(element).hasClass(defaults)) {
        $(element).removeClass(defaults);
      } else {
        $(element).addClass(defaults);
      }
    }

    function navsCarousel(element, nav) {
      $(nav+'.prev').click(function(e) {
        e.preventDefault();
        element.trigger('prev.owl.carousel');
      })

      $(nav+'.next').click(function(e) {
        e.preventDefault();
          element.trigger('next.owl.carousel');
      })
    }


    //CAROUSELS
    const homepage__slider = $('.homepage__slider');
    homepage__slider.owlCarousel({
      loop:false,
      nav:false,
      items: 1,
      dots: true
    })

    const news__slider = $(".news__slider");
    news__slider.owlCarousel({
      loop: true,
      nav:false, 
      dots: false,
      margin: 0,
      items:1,
      responsive: {
        776: {
          items:2
        },
        1200: {
          items: 4
        }
      }
    })

    navsCarousel(news__slider, ".news .carousel-nav");

    const product__slider = $('.product__slider');
    product__slider.owlCarousel({
      loop: true,
      items:1,
      dots: false,
      nav: false,
      margin: 0,
      responsive: {
        991: {
          items: 2
        },
        1200: {
          items: 3
        }
      }
    })

    navsCarousel(product__slider, ".products .carousel-nav");

    const reference__slider = $('.reference__slider');
    reference__slider.owlCarousel({
      loop: true,
      items: 2,
      dots: false,
      nav: false,
      margin: 0,
      responsive: {
        576: {
          items: 3
        },
        991: {
          margin:30,
          items: 4
        },
        1200: {
          margin:30,
          items: 5
        },
        1500: {
          margin:30,
          items: 6
        }
      }
    })

    navsCarousel(reference__slider, '.reference .carousel-nav')

  

});