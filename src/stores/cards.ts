// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import newDeck from '@/utils/newDeck'

export const useCardStore = defineStore('cards', () => {
  let drawableCards: Deck = [];
  const playedCards: Deck = [];

  function resetDeck() {
    drawableCards = newDeck;
  };

  function drawCard() {
    if (drawableCards.length>0) {
      // selects a position on the drawable cards array
      const cardPosition = Math.floor(Math.random()*drawableCards.length);
      // gets the card from that position and removes it from the array
      const randomCard = drawableCards[cardPosition];
      drawableCards.splice(cardPosition, 1);

      // adds the selected card to the beggining of the played cards array
      playedCards.reverse();
      playedCards.push(randomCard);
      playedCards.reverse();
    }
  }

  return { drawableCards, playedCards, resetDeck, drawCard }
})
