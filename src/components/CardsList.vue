<script setup lang="ts">
import { useCardStore } from '../stores/cards';
import { capitalize, colorOf } from '@/helpers';

const cards = useCardStore().playedCards;
</script>

<template>
  <section class="cards">
    <Transition name="slide-fade" appear>
      <h3 class="cards__title">Histórico de cartas</h3>
    </Transition>
    <Transition name="fade" appear>
    <TransitionGroup
      tag="ul"
      name="fade"
      class="cards__list"
    >
      <li
        v-for="card in cards.slice(1)"
        :key="(card.name as string)"
        class="card"
        >
        <div :class="`bg bg--${colorOf(card.suit)}`" />
        <SvgComponent
          :icon="`Card${capitalize(card.suit)}`"
          class="card__suit"
        />
        <span class="card__letter">
          {{ card.letter }}
        </span>
      </li>
    </TransitionGroup>
    </Transition>
  </section>
</template>

<style lang="scss" scoped>
@import '../assets/scss/breakpoints';
@import '../assets/scss/colors';
@import '../assets/scss/container';
@import '../assets/scss/fonts';
@import '../assets/scss/normalize';
@import '../assets/scss/variables';
.cards {
  margin: 0 $side-spacing 78px;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  &__title {
    font-size: 1.25rem;
    font-weight: bold;
    padding: 0 0.5rem;
  }

  &__list {
    position: relative;
  }
}

.card {
  padding: 0.5rem;
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  width: fit-content;
  position: relative;
  
  &__suit {
    height: 4rem;
    width: 4rem;
    fill: white;
    position: absolute;
    left: -3px;
  }
  
  &__letter {
    grid-column-start: 2;
    font-size: 2rem;
    font-family: $card-font;
    font-weight: bold;
  }

  .bg {
    grid-column-start: 1;
    height: 4rem;
    width: 2.5rem;
    top: 0.5rem;
    left: 1.25rem;
    border-radius: 0.25rem;
    
    &--red {
      background-color: red;
    }

    &--black {
      background-color: black;
    }
  }
}

/**
 * Transitions
 */

 // Fade
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: rotate(45deg) scaleY(4) translate(0, -40px);
}

.fade-leave-active {
  position: absolute;
}

// Fade-slide
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-40px);
  opacity: 0;
}
</style>