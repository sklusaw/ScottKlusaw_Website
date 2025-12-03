/**
 * YouTube Player Component
 *
 * @fileoverview Manages YouTube IFrame Player API integration for embedded video playback.
 * Provides initialization, configuration, and control methods for the YouTube player.
 *
 * @requires YouTube IFrame Player API (loaded from https://www.youtube.com/player_api)
 * @see https://developers.google.com/youtube/iframe_api_reference
 */

(function (window) {
  'use strict';

  /**
   * YouTubePlayer class for managing video playback
   * @class
   */
  const YouTubePlayer = {
    /**
     * Player instance
     * @type {YT.Player|null}
     */
    player: null,

    /**
     * Default configuration options
     * @type {Object}
     */
    config: {
      elementId: 'ytplayer',
      videoId: '7dQvW_t5K4M',
      width: 640,
      height: 360,
      playerVars: {
        autoplay: 1, // Auto-play video on load
        loop: 1, // Loop video playback
        controls: 1, // Show player controls
        showinfo: 0, // Hide video title/uploader (deprecated but kept for older browsers)
        autohide: 1, // Auto-hide controls after playback starts
        modestbranding: 1, // Minimize YouTube branding
        vq: 'hd1080', // Preferred video quality
      },
    },

    /**
     * Initialize the YouTube Player
     *
     * @description Loads the YouTube IFrame API asynchronously and sets up the player
     * with the specified configuration. The API will call onYouTubePlayerAPIReady()
     * when ready.
     *
     * @param {Object} [options] - Optional configuration overrides
     * @param {string} [options.elementId] - ID of the element to replace with player
     * @param {string} [options.videoId] - YouTube video ID to play
     * @param {number} [options.width] - Player width in pixels
     * @param {number} [options.height] - Player height in pixels
     * @param {Object} [options.playerVars] - YouTube player parameters
     *
     * @example
     * // Initialize with default settings
     * YouTubePlayer.init();
     *
     * @example
     * // Initialize with custom video
     * YouTubePlayer.init({
     *   videoId: 'dQw4w9WgXcQ',
     *   width: 800,
     *   height: 450
     * });
     */
    init: function (options) {
      // Merge custom options with defaults
      if (options) {
        this.config = Object.assign({}, this.config, options);
        if (options.playerVars) {
          this.config.playerVars = Object.assign({}, this.config.playerVars, options.playerVars);
        }
      }

      // Load the YouTube IFrame API code asynchronously
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/player_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // The API will call window.onYouTubePlayerAPIReady when ready
      // We need to set it up globally
      window.onYouTubePlayerAPIReady = this.onAPIReady.bind(this);
    },

    /**
     * Callback when YouTube IFrame API is ready
     *
     * @description Called automatically by the YouTube API when it's loaded and ready.
     * Creates the player instance and replaces the target element with an iframe.
     *
     * @private
     */
    onAPIReady: function () {
      this.player = new YT.Player(this.config.elementId, {
        height: this.config.height,
        width: this.config.width,
        videoId: this.config.videoId,
        playerVars: this.config.playerVars,
        events: {
          onReady: this.onPlayerReady.bind(this),
          onStateChange: this.onPlayerStateChange.bind(this),
        },
      });
    },

    /**
     * Callback when player is ready
     *
     * @description Called when the video player is fully loaded and ready for interaction.
     * Starts video playback automatically if autoplay is enabled.
     *
     * @param {Object} event - YouTube player event object
     * @param {YT.Player} event.target - The player instance
     *
     * @private
     */
    onPlayerReady: function (event) {
      // Auto-play the video when loaded
      // Note: Autoplay may be blocked by browser policies requiring user interaction
      event.target.playVideo();

      // Optional: Mute the video (uncomment if needed)
      // event.target.mute();
    },

    /**
     * Callback when player state changes
     *
     * @description Called when the player's state changes (playing, paused, ended, etc.).
     * Currently a placeholder for future functionality.
     *
     * @param {Object} event - YouTube player event object
     * @param {number} event.data - Player state code
     *   -1 (unstarted)
     *    0 (ended)
     *    1 (playing)
     *    2 (paused)
     *    3 (buffering)
     *    5 (video cued)
     *
     * @private
     */
    onPlayerStateChange: function (event) {
      // Placeholder for future state change handling
      // Example: Track when video ends, loop manually, etc.
    },

    /**
     * Stop video playback
     *
     * @description Stops the current video and returns to the beginning.
     * Can be called from external code to control playback.
     *
     * @returns {void}
     *
     * @example
     * // Stop the video
     * YouTubePlayer.stop();
     */
    stop: function () {
      if (this.player && this.player.stopVideo) {
        this.player.stopVideo();
      }
    },

    /**
     * Play video
     *
     * @description Starts or resumes video playback.
     *
     * @returns {void}
     *
     * @example
     * // Play the video
     * YouTubePlayer.play();
     */
    play: function () {
      if (this.player && this.player.playVideo) {
        this.player.playVideo();
      }
    },

    /**
     * Pause video
     *
     * @description Pauses video playback.
     *
     * @returns {void}
     *
     * @example
     * // Pause the video
     * YouTubePlayer.pause();
     */
    pause: function () {
      if (this.player && this.player.pauseVideo) {
        this.player.pauseVideo();
      }
    },
  };

  // Expose to global scope
  window.YouTubePlayer = YouTubePlayer;
})(window);
