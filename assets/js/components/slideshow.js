/**
 * Image Slideshow Component
 *
 * @fileoverview Manages a manual image slideshow/carousel with navigation controls
 * and dot indicators. Supports previous/next buttons and direct slide selection.
 *
 * @requires DOM elements with classes: .mySlides, .prev, .next, .dot
 */

(function (window) {
  'use strict';

  /**
   * Slideshow class for managing image carousel
   * @class
   */
  const Slideshow = {
    /**
     * Current slide index (1-based)
     * @type {number}
     */
    slideIndex: 1,

    /**
     * Initialize the slideshow
     *
     * @description Sets up event listeners for navigation controls and displays
     * the first slide. Must be called after DOM is ready.
     *
     * @param {number} [startIndex=1] - Initial slide to display (1-based)
     *
     * @example
     * // Initialize on page load
     * document.addEventListener('DOMContentLoaded', function() {
     *   Slideshow.init();
     * });
     *
     * @example
     * // Start on slide 3
     * Slideshow.init(3);
     */
    init: function (startIndex) {
      this.slideIndex = startIndex || 1;

      // Set up event listeners for navigation buttons
      const prevButton = document.querySelector('.prev');
      const nextButton = document.querySelector('.next');

      if (prevButton) {
        prevButton.addEventListener('click', () => this.navigate(-1));
      }

      if (nextButton) {
        nextButton.addEventListener('click', () => this.navigate(1));
      }

      // Set up event listeners for dot indicators
      const dots = document.querySelectorAll('.dot');
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => this.goToSlide(index + 1));
      });

      // Display the initial slide
      this.show(this.slideIndex);
    },

    /**
     * Navigate to adjacent slide
     *
     * @description Moves forward or backward by the specified number of slides.
     * Wraps around at the beginning and end of the slideshow.
     *
     * @param {number} direction - Number of slides to move (positive for next, negative for previous)
     *
     * @example
     * // Go to next slide
     * Slideshow.navigate(1);
     *
     * @example
     * // Go to previous slide
     * Slideshow.navigate(-1);
     */
    navigate: function (direction) {
      this.show((this.slideIndex += direction));
    },

    /**
     * Jump to specific slide
     *
     * @description Displays the slide at the specified index. Index is 1-based.
     *
     * @param {number} slideNumber - Slide number to display (1-based)
     *
     * @example
     * // Show the third slide
     * Slideshow.goToSlide(3);
     */
    goToSlide: function (slideNumber) {
      this.show((this.slideIndex = slideNumber));
    },

    /**
     * Display the specified slide
     *
     * @description Updates the DOM to show only the specified slide and highlights
     * the corresponding dot indicator. Handles wrapping at slideshow boundaries.
     *
     * @param {number} n - Slide number to display (1-based, wraps around)
     *
     * @private
     *
     * @example
     * // Internal usage only
     * this.show(this.slideIndex);
     */
    show: function (n) {
      let i;
      const slides = document.getElementsByClassName('mySlides');
      const dots = document.getElementsByClassName('dot');

      // Wrap around if beyond bounds
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }

      // Hide all slides
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }

      // Remove active class from all dots
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
      }

      // Show current slide and highlight corresponding dot
      if (slides[this.slideIndex - 1]) {
        slides[this.slideIndex - 1].style.display = 'block';
      }
      if (dots[this.slideIndex - 1]) {
        dots[this.slideIndex - 1].className += ' active';
      }
    },

    /**
     * Get current slide index
     *
     * @description Returns the currently displayed slide number (1-based).
     *
     * @returns {number} Current slide index
     *
     * @example
     * // Check which slide is showing
     * const current = Slideshow.getCurrentSlide();
     * console.log('Showing slide ' + current);
     */
    getCurrentSlide: function () {
      return this.slideIndex;
    },

    /**
     * Get total number of slides
     *
     * @description Returns the total count of slides in the slideshow.
     *
     * @returns {number} Total number of slides
     *
     * @example
     * // Get slide count
     * const total = Slideshow.getTotalSlides();
     * console.log('Total slides: ' + total);
     */
    getTotalSlides: function () {
      const slides = document.getElementsByClassName('mySlides');
      return slides.length;
    },
  };

  // Expose to global scope
  window.Slideshow = Slideshow;
})(window);
