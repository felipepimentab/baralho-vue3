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
      Comece clicando no botão abaixo para tirar uma carta.
    </h2>
    <PickedCard v-if="cards.length>0" />
    <CardsList v-if="cards.length>1" />
  </main>
</template>

<style lang="scss" scoped>
.main {
  min-height: 100%;
  height: fit-content;

  &__text {
    margin: 0 1rem;
  }
}
</style>