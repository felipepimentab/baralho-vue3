<script setup lang="ts">
import { useCardStore } from '@/stores/cards';

const store = useCardStore();
function draw() {
  store.drawCard();
};
</script>

<template>
  <div
    class="button"
    >
    <button
      class="button__draw"
      @click="draw"
    >
      <SvgComponent
      icon="Draw"
      title="Tirar carta"
      class="button__draw__icon"
      />
      <span class="button__draw__text">
        Tirar carta
      </span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/_global';
.button {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.5rem $side-spacing 1.5rem;
  display: grid;
  /* grid-template-columns: 1fr auto; */
  grid-template-columns: 1fr;
  column-gap: 1rem;
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);

  &__draw {
    background-color: $accent-dark;
    padding: 0.5rem;
    font-size: 1.25rem;
    border-radius: 0.5rem;
    color: $secondary-dark;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.5rem;

    &__icon {
      width: 1.5rem;
      height: 1.5rem;
      fill: $secondary-dark;
    }
    
    &:focus,
    &:hover {
      outline: none;
      color: $white;

      &__icon {
        fill: $white;
      }
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