<script setup lang="ts">
import { useCardStore } from '../stores/cards';
import { capitalize, colorOf } from '@/helpers';

const cards = useCardStore().playedCards;
</script>

<template>
  <section class="cards-list">
    <h3 class="cards-list__title">Histórico de cartas</h3>
    <ul class="list">
      <li
        v-for="card in cards"
        :key="card.letter"
        class="card"
        >
        <SvgComponent
          :icon="`Card${capitalize(card.suit)}`"
          class="card__suit"
          :class="`bg bg--${colorOf(card.suit)}`"
        />
        <span class="card__letter">
          {{ card.letter }}
        </span>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/scss/breakpoints';
@import '../assets/scss/colors';
@import '../assets/scss/container';
@import '../assets/scss/fonts';
@import '../assets/scss/normalize';
@import '../assets/scss/variables';
.cards-list {
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  &__title {
    font-size: 1.25rem;
    font-weight: bold;
    padding: 0 0.5rem;
  }
}

.card {
  padding: 0.5rem;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  position: relative;
  
  &:first-child {
    display: none;
  }
  
  &__suit {
    height: 4rem;
    width: 4rem;
    fill: white;
  }
  
  &__letter {
    font-size: 2rem;
    font-family: $card-font;
    font-weight: bold;
  }
}
</style>