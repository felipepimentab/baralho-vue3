<script setup lang="ts">
import CardsList from '@/components/CardsList.vue';
import PickedCard from '@/components/PickedCard.vue';
import { useCardStore } from '../stores/cards';

const cards = useCardStore().playedCards;
</script>

<template>
  <main class="main">
    <h2
      v-if="cards.length === 0"
      class="main__text"
    >
      Comece clicando no botão abaixo para tirar uma carta. Recarregue a página para recomeçar.
    </h2>
    <PickedCard v-if="cards.length > 0" />
    <CardsList v-if="cards.length > 1" />
  </main>
</template>

<style lang="scss" scoped>
@import '@/assets/global';

.main {
  min-height: 100%;
  height: fit-content;
  position: sticky;
  top: -2rem;

  &__text {
    margin: 0 $side-spacing;
  }
}

/* 
 * Transition
 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>