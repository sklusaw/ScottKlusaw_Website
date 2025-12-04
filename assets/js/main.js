(function ($) {
  'use strict';

  $(window).on('load', function () {
    /*
   Custom Components Initialization
   ========================================================================== */
    // Initialize YouTube Player (if element exists)
    if (document.getElementById('ytplayer')) {
      YouTubePlayer.init();
    }

    // Initialize Slideshow (if slides exist)
    if (document.getElementsByClassName('mySlides').length > 0) {
      Slideshow.init();
    }

    /*
   MixitUp
   ========================================================================== */
    // POSSIBLY UNUSED: No .mix filter items found in #portfolio section
    // This plugin is loaded but has no elements to filter
    // Safe to remove if portfolio filtering not planned
    $('#portfolio').mixItUp();

    /*
   One Page Navigation & wow js
   ========================================================================== */
    var OnePNav = $('.onepage-nev');
    var top_offset = OnePNav.height() - -0;
    OnePNav.onePageNav({
      currentClass: 'active',
      scrollOffset: top_offset,
    });

    /*Page Loader active
    ========================================================*/
    $('#preloader').fadeOut();

    // Sticky Nav
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 200) {
        $('.scrolling-navbar').addClass('top-nav-collapse');
      } else {
        $('.scrolling-navbar').removeClass('top-nav-collapse');
      }
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
      prependTo: '.navbar-header',
      parentTag: 'liner',
      allowParentLinks: true,
      duplicate: true,
      label: '',
      closedSymbol: '<i class="icon-arrow-right"></i>',
      openedSymbol: '<i class="icon-arrow-down"></i>',
    });

    /* WOW Scroll Spy
    ========================================================*/
    var wow = new WOW({
      //disabled for mobile
      mobile: false,
    });

    wow.init();

    /* Nivo Lightbox
    ========================================================*/
    // POSSIBLY UNUSED: No elements with .lightbox class found in HTML
    // This plugin is loaded but no images use the lightbox class
    // Safe to remove if image lightbox functionality not needed
    $('.lightbox').nivoLightbox({
      effect: 'fadeScale',
      keyboardNav: true,
    });

    /* Counter
    ========================================================*/
    // POSSIBLY UNUSED: No elements with .counterUp class found in HTML
    // This plugin is loaded but no counters use the animation class
    // Safe to remove if number animations not needed
    $('.counterUp').counterUp({
      delay: 10,
      time: 1000,
    });

    /* Back Top Link active
    ========================================================*/
    var offset = 200;
    var duration = 500;
    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click', function (event) {
      event.preventDefault();
      $('html, body').animate(
        {
          scrollTop: 0,
        },
        600
      );
      return false;
    });
  });
})(jQuery);
