<script setup lang="ts">
import { useCardStore } from '@/stores/cards';

const store = useCardStore();
function draw() {
  store.drawCard();
};
function reset() {
  store.resetDeck();
}
</script>

<template>
  <footer class="footer">
    <button
      class="footer__draw"
      @click="draw"
    >
      <SvgComponent
        icon="Draw"
        class="footer__draw__icon"
      />
      <span class="footer__draw__text">
        Tirar carta
      </span>
    </button>
    <button
      class="footer__reset"
      @click="reset"
    >
      <SvgComponent
        icon="Reset"
        class="footer__reset__icon"
      />
    </button>
  </footer>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/breakpoints';
@import '../../assets/scss/colors';
@import '../../assets/scss/container';
@import '../../assets/scss/fonts';
@import '../../assets/scss/normalize';
@import '../../assets/scss/variables';
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.5rem 1rem 1.5rem;
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 1rem;
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);

  &__draw {
    background-color: $accent-dark;
    padding: 0.5rem;
    border-radius: 0.5rem;
    color: $secondary-dark;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.5rem;
    
    &:focus {
      outline: none;
    }

    &__icon {
      width: 1.5rem;
      height: 1.5rem;
      fill: $secondary-dark;
    }
  }

  &__reset {
    background-color: $accent-dark;
    padding: 0.5rem;
    border-radius: 0.5rem;

    &:focus {
      outline: none;
    }

    &__icon {
      fill: $secondary-dark;
    }
  }
}
</style>