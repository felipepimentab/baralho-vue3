import { ref } from 'vue'
import { defineStore } from 'pinia'
import newDeck from '@/utils/newDeck'

export const useCardStore = defineStore('cards', () => {
  const drawableCards = ref(newDeck as Deck);
  const playedCards= ref([] as Deck);

  function resetDeck() {
    drawableCards.value = newDeck as Deck;
    playedCards.value = [];
  };

  function drawCard() {
    if (drawableCards.value.length>0) {
      // selects a position on the drawable cards array
      const cardPosition = Math.floor(Math.random()*drawableCards.value.length);
      // gets the card from that position and removes it from the array
      const randomCard = drawableCards.value[cardPosition];
      drawableCards.value.splice(cardPosition, 1);

      // adds the selected card to the beggining of the played cards array
      playedCards.value.reverse();
      playedCards.value.push(randomCard);
      playedCards.value.reverse();
    }
  }

  return { drawableCards, playedCards, resetDeck, drawCard }
})
