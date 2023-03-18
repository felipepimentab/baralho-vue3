<script setup lang="ts">
import { useCardStore } from '../stores/cards';
import { capitalize, colorOf } from '../helpers';

const card = useCardStore().playedCards;
</script>

<template>
  <article class="card">
    <div class="card__top">
      <SvgComponent
        :key="card[0].name"
        :icon="capitalize(card[0].suit)"
        class="card__top__suit"
        :class="`card__top__suit--${colorOf(card[0].suit)}`"
      />
      <span class="card__top__letter">{{ card[0].letter }}</span>
    </div>
    <span class="card__name">
      {{ card[0].name }}
    </span>
  </article>
</template>

<style lang="scss" scoped>
@import '../assets/scss/breakpoints';
@import '../assets/scss/colors';
@import '../assets/scss/container';
@import '../assets/scss/fonts';
@import '../assets/scss/normalize';
@import '../assets/scss/variables';
.card {
  margin: 1rem $side-spacing;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background-color: $secondary-dark;
  color: $main-dark;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  &__top {
    display: flex;
    align-items: center;
    column-gap: 1rem;

    &__suit {
      width: 3rem;
      height: 3rem;

      &--red {
        fill: red;
      }

      &--black {
        fill: $main-dark;
      }
    }

    &__letter {
      font-size: 3rem;
      font-family: $card-font;
      font-weight: bold;
    }
  }
  
  &__name {
    margin-left: 0.5rem;
    font-size: 1.25rem;
  }
}
</style>