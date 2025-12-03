/**
 * Dating Sim - Game Data Module
 *
 * This module contains all character data, dialogues, and relationship options
 * for the dating simulator game.
 *
 * @module DatingSimData
 */

/**
 * Character configuration object
 * @typedef {Object} Character
 * @property {string} name - Character's display name
 * @property {string} image - URL to character's image
 * @property {number} relationshipPoints - Current relationship score
 * @property {Dialogue[]} dialogues - Array of dialogue interactions
 * @property {string} finalDialogue - Text shown at game completion
 */

/**
 * Dialogue interaction object
 * @typedef {Object} Dialogue
 * @property {string} text - The dialogue text displayed to the player
 * @property {DialogueOption[]} options - Available response options
 */

/**
 * Player response option
 * @typedef {Object} DialogueOption
 * @property {string} text - The response text shown to player
 * @property {number} effect - Relationship points change (positive or negative)
 */

/**
 * All available characters in the dating simulator
 * @type {Character[]}
 * @constant
 */
const characters = [
  {
    name: 'Alex (Mean)',
    image: 'https://via.placeholder.com/300x400?text=Mean+Alex',
    relationshipPoints: 0,
    dialogues: [
      {
        text: 'Oh, it's you again. What do you want?',
        options: [
          { text: 'Just saying hi!', effect: -5 },
          { text: 'How's your day?', effect: -5 },
          { text: 'I'll just leave you alone.', effect: 5 },
        ],
      },
      {
        text: 'Do you really think I care about your hobbies?',
        options: [
          { text: 'I like reading.', effect: -5 },
          { text: 'I love sports.', effect: -10 },
          { text: 'I don't have hobbies.', effect: 0 },
        ],
      },
    ],
    finalDialogue:
      "Well, I guess you're not the worst person. Maybe I could tolerate you for a little longer.",
  },
  {
    name: 'Taylor (Flirty)',
    image: 'https://via.placeholder.com/300x400?text=Flirty+Taylor',
    relationshipPoints: 0,
    dialogues: [
      {
        text: 'Hey there, cutie. What brings you here today?',
        options: [
          { text: 'Just wanted to see you.', effect: 10 },
          { text: 'I was just passing by.', effect: 5 },
          { text: 'No reason.', effect: -5 },
        ],
      },
      {
        text: 'Do you believe in love at first sight, or should I walk by again?',
        options: [
          { text: 'It must be fate!', effect: 10 },
          { text: 'I'm not sure...', effect: 0 },
          { text: 'That's cheesy.', effect: -5 },
        ],
      },
    ],
    finalDialogue: "Looks like we've really hit it off! So, how about that date?",
  },
  {
    name: 'Nicholas Cage',
    image: 'https://via.placeholder.com/300x400?text=Nicholas+Cage',
    relationshipPoints: 0,
    dialogues: [
      {
        text: 'I can see it in your eyes. You think I'm intense, don't you?',
        options: [
          { text: 'Absolutely! You're a legend.', effect: 15 },
          { text: 'A little too intense, maybe.', effect: 0 },
          { text: 'No, not really.', effect: -5 },
        ],
      },
      {
        text: 'Would you join me on a wild adventure across the desert?',
        options: [
          { text: 'Of course! Let's ride!', effect: 10 },
          { text: 'Sounds dangerous...', effect: -5 },
          { text: 'I'll pass.', effect: -10 },
        ],
      },
      {
        text: 'I once bought a castle. Do you want to hear the story?',
        options: [
          { text: 'Tell me everything!', effect: 10 },
          { text: 'You're full of surprises.', effect: 5 },
          { text: 'Not really interested.', effect: -10 },
        ],
      },
    ],
    finalDialogue:
      'You and I... we could rule the world together, one crazy adventure at a time!',
  },
];
