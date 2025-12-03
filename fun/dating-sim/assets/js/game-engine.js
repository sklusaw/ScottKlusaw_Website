/**
 * Dating Sim - Game Engine Module
 *
 * This module manages the game state, screen transitions, dialogue flow,
 * and relationship tracking for the dating simulator.
 *
 * @module DatingSimEngine
 * @requires DatingSimData
 */

/**
 * Main game controller object
 * @namespace
 */
const DatingSimGame = {
  /**
   * Current character being interacted with (index into characters array)
   * @type {number}
   */
  currentCharacterIndex: 0,

  /**
   * Current dialogue for the active character (index into character.dialogues)
   * @type {number}
   */
  currentDialogueIndex: 0,

  /**
   * Initialize the game by setting up event listeners
   * Called automatically when the page loads
   *
   * @example
   * // Game initializes on page load
   * window.onload = DatingSimGame.init;
   */
  init() {
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
      startBtn.onclick = this.startGame.bind(this);
    }
    this.loadCharacter();
  },

  /**
   * Transition from opening screen to game screen
   * Hides the title screen and displays the first character interaction
   */
  startGame() {
    const openingScreen = document.getElementById('opening-screen');
    const gameScreen = document.getElementById('game-screen');

    if (openingScreen) openingScreen.style.display = 'none';
    if (gameScreen) gameScreen.style.display = 'block';

    this.loadCharacter();
  },

  /**
   * Load and display the current character
   * Updates character name, image, and relationship status
   * Then loads the current dialogue options
   */
  loadCharacter() {
    const character = characters[this.currentCharacterIndex];
    const nameElement = document.getElementById('character-name');
    const imageElement = document.getElementById('character-image');

    if (nameElement) nameElement.innerText = character.name;
    if (imageElement) imageElement.src = character.image;

    this.updateRelationshipStatus();
    this.loadDialogue();
  },

  /**
   * Load and display the current dialogue with available response options
   * Creates interactive buttons for each dialogue choice
   */
  loadDialogue() {
    const character = characters[this.currentCharacterIndex];
    const dialogue = character.dialogues[this.currentDialogueIndex];
    const dialogueText = document.getElementById('dialogue-text');
    const optionsContainer = document.getElementById('options');

    if (dialogueText) dialogueText.innerText = dialogue.text;
    if (!optionsContainer) return;

    optionsContainer.innerHTML = '';

    dialogue.options.forEach((option) => {
      const button = document.createElement('button');
      button.classList.add('option');
      button.innerText = option.text;
      button.onclick = () => this.chooseOption(option.effect);
      optionsContainer.appendChild(button);
    });
  },

  /**
   * Handle player's dialogue choice
   * Updates relationship points and advances to next dialogue or character
   *
   * @param {number} effect - Relationship points to add (can be negative)
   */
  chooseOption(effect) {
    const character = characters[this.currentCharacterIndex];
    character.relationshipPoints += effect;

    this.currentDialogueIndex++;

    // Check if we've exhausted all dialogues for this character
    if (this.currentDialogueIndex >= character.dialogues.length) {
      this.currentDialogueIndex = 0;
      this.currentCharacterIndex++;

      // Check if all characters are done
      if (this.currentCharacterIndex >= characters.length) {
        this.endGame();
        return;
      }
    }

    this.loadCharacter();
  },

  /**
   * Update the displayed relationship status for the current character
   * Shows the current relationship points value
   */
  updateRelationshipStatus() {
    const character = characters[this.currentCharacterIndex];
    const statusElement = document.getElementById('relationship-status');

    if (statusElement) {
      statusElement.innerText = `Relationship: ${character.relationshipPoints}`;
    }
  },

  /**
   * End the game and display final results
   * Determines which character has the highest relationship score
   * and shows their final dialogue
   */
  endGame() {
    // Find the character with the highest relationship points
    const topCharacter = characters.reduce((prev, current) =>
      prev.relationshipPoints > current.relationshipPoints ? prev : current
    );

    const gameScreen = document.getElementById('game-screen');
    const finalScreen = document.getElementById('final-screen');
    const finalName = document.getElementById('final-character-name');
    const finalDialogue = document.getElementById('final-dialogue-text');

    if (gameScreen) gameScreen.style.display = 'none';
    if (finalScreen) finalScreen.style.display = 'block';
    if (finalName) finalName.innerText = `Final Dialogue with ${topCharacter.name}`;
    if (finalDialogue) finalDialogue.innerText = topCharacter.finalDialogue;
  },
};

// Initialize game on page load
window.onload = () => DatingSimGame.init();
