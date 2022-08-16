/*------------------------------------------------------------------
    Template Name:  HoomPotact
    Version: 1.0
    Author: Layerdrops
    Author Email: layerdrops@gmail.com

    [Table of Content]
    -01 PreLoader
    -02 Header Slider
    -03 Fixed Nav
    -04 Toggle Nav Menu
    -05 Lightbox
    -06 CounterUP
    -07 Custom Radio Button
    -08 Header Sliders
    -09 Testimonial Slider
    -10 Service Slider
    -11 Clients Logos
    -12 Google Maps
*/





(function ($) {
    'use strict';

    /*** =====================================
     * -01 PreLoader
     * =====================================***/
    $(window).on('load', function(){
        $('.spinner').delay('50').fadeOut(50);
        $('.header_svg_home').delay('0').addClass('active');
    });

    $(document).on('ready', function () {

        /*** =====================================
         * -02 Header Slider
         * =====================================***/



      /*here*/  if($(".scroll_fixed").length) {
            const nav = document.querySelector('.scroll_fixed');
            const topOfNav = 100;

            function fixNav() {
                if (window.scrollY >= topOfNav) {
                   
                    document.body.classList.add('fixed-nav');
                } else {
                    document.body.style.top = 0;
                    document.body.classList.remove('fixed-nav');
                }
            }

            window.addEventListener('scroll', fixNav);
        }

        /*** =====================================
         * -03 Fixed Nav
         * =====================================***/
         if($(".scrolling_fixed").length) {
             $(window).bind('scroll', function () {
                 if ($(window).scrollTop() > 50) {
                     $('.scrolling_fixed').addClass('fixed');
                 } else {
                     $('.scrolling_fixed').removeClass('fixed');
                 }
             });
         }

        /*** =====================================
         * -04 Toggle Nav Menu
         * =====================================***/
        $(document).on('click','.main_menu_area .navbar-nav li > .menu_icon:not(:only-child)', function (e) {
            $(this).siblings('.highlight_dropdown').toggle();
            $('.highlight_dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        $(document).on('click', '.main_menu_area .navbar-toggles', function () {
            $(".header_area .main_menu_area .collapse_responsive").toggleClass('active');
        });
        $(document).on('click', '.header_area .main_menu_area .collapse_responsive .close_menu_area_btn', function () {
            $(".header_area .main_menu_area .collapse_responsive").removeClass('active');
        });

        /*** =====================================
         * -05 Lightbox
         * =====================================***/
        if($(".lightbox").length) {
            $('.lightbox').topbox({
                effect: 'fade',
            });
        }

        /*** =====================================
         * -06 CounterUP
         * =====================================***/
         if($(".counterup").length) {
             $('.counterup').counterUp({
                 delay: 10,
                 time: 3000
             });
         }

        /*** =====================================
         * -07 Custom Radio Button
         * =====================================***/
         if($(".custom_radio_btn").length) {
            $(document).on('click', '.custom_radio_btn.radio_1 li', function () {
                $(".custom_radio_btn.radio_1 li").removeClass('active');
                $(this).addClass('active');
            });
            $(document).on('click', '.custom_radio_btn.radio_3 li', function () {
                $(".custom_radio_btn.radio_3 li").removeClass('active');
                $(this).addClass('active');
            });
            $(document).on('click', '.custom_radio_btn.radio_2 li', function () {
                $(".custom_radio_btn.radio_2 li").removeClass('active');
                $(this).addClass('active');
            });
         }

        /*** =====================================
         * -08 Header Sliders
         * =====================================***/
         if($(".header_slider").length) {
             $('.header_slider').owlCarousel({
                 items: 1,
                 autoHeight: true,
                 autoplay: true,
                 loop: true,
                 nav: false,
                 dots: false,
                 slideSpeed: 1000,
                 animateOut: 'fadeOut',
                 animateIn: 'fadeIn',
                 autoplayTimeout: 7000,
             });
         }
         if($(".header_slider_style_2").length) {
             $('.header_slider_style_2').owlCarousel({
                 items: 1,
                 autoHeight: true,
                 autoplay: true,
                 loop: true,
                 nav: true,
                 navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
                 dots: false,
                 slideSpeed: 1000,
                 animateOut: 'fadeOut',
                 animateIn: 'fadeIn',
                 autoplayTimeout: 7000,
             });
         }

        /*** =====================================
         * -09 Testimonial Slider
         * =====================================***/
         if($("#testimonial-slider").length) {
             $('#testimonial-slider').owlCarousel({
                 items: 3,
                 autoHeight: true,
                 autoplay: true,
                 loop: true,
                 nav: false,
                 dots: true,
                 slideSpeed: 1000,
                 animateOut: 'fadeOut',
                 animateIn: 'fadeIn',
                 autoplayTimeout: 4000,
                 responsive: {
                  0: {
                      items: 1,
                  },
                  600: {
                      items: 1,
                  },
                  1000: {
                      items: 3,
                  }
              }

             });
         }

        /*** =====================================
         * -10 Service Slider
         * =====================================***/
         if($(".service_slider").length) {
             $('.service_slider').owlCarousel({
                 autoHeight: true,
                 autoplay: true,
                 loop: true,
                 nav: true,
                 navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                 autoplayTimeout: 4000,
                 dots: false,
                 margin: 30,
                 responsive: {
                     0: {
                         items: 1,
                     },
                     600: {
                         items: 1,
                     },
                     1000: {
                         items: 3,
                     }
                 }
             });
         }

        /*** =====================================
         * -11 Clients Logos
         * =====================================***/
         if($(".client_slider").length) {
             $('.client_slider').owlCarousel({
                 autoHeight: true,
                 autoplay: true,
                 loop: true,
                 nav: false,
                 autoplayTimeout: 3000,
                 dots: false,
                 responsive: {
                     0: {
                         items: 1,
                     },
                     600: {
                         items: 3,
                     },
                     1000: {
                         items: 3,
                     }
                 }
             });
         }
         if($(".clients_slider").length) {
          $('.clients_slider').owlCarousel({
              autoHeight: true,
              autoplay: true,
              loop: true,
              nav: false,
              autoplayTimeout: 3000,
              dots: false,
              responsive: {
                  0: {
                      items: 1,
                  },
                  600: {
                      items: 3,
                  },
                  1000: {
                      items: 3,
                  }
              }
          });
      }


        /*** =====================================
         * -12 Google Maps
         * =====================================***/
         if($("#map").length) {
             initMap('map', 40.712776, -74.005974, 'assets/images/map-marker.webp');
         }
         if($("#map_style_two").length) {
             initMap('map', 40.717499, -74.044113, 'assets/images/map-marker.webp');
         }

    });


})(jQuery);



function setnewimage() {
document.getElementById("logo").src = "logo wifi gif 2.gif";
}
function setoldimage() {
document.getElementById("logo").src = 'wifi.webp';
}
$.getScript("https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js", function(){
    particlesJS('particles-js',
      {
        "particles": {
          "number": {
            "value": 70,
            "density": {
              "enable": true,
              "value_area": 600,
              "opacity":0.2
            }
          },
          "color": {
            "value": "#85d2d3"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#85d2d3"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.1,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 5,
            "random": true,
            "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#85d2d3",
            "opacity": 0.4,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
            },
            "repulse": {
              "distance": 100
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true,
        "config_demo": {
          "hide_card": false,
          "background_color": "#85d2d3",
          "background_image": "",
          "background_position": "50% 50%",
          "background_repeat": "no-repeat",
          "background_size": "cover"
        }
      }
    );

});
