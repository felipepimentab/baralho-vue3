<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const route = useRoute();
const currentView = computed(() => route.name);
</script>

<template>
  <header class="header">
    <SvgComponent
      icon="Baralho"
      class="header__icon"
    />
    <h1 class="header__title">
      Baralho
    </h1>
    <router-link
      v-if="currentView === 'home'"
      :to="{ name: 'help' }"
      class="header__help"
    >
      <SvgComponent
        icon="Help"
        class="header__help__icon"
      />
    </router-link>
    <router-link
      v-else
      :to="{ name: 'home' }"
      class="header__help"
    >
      <SvgComponent
        icon="Return"
        class="header__help__icon"
      />
    </router-link>
  </header>
</template>

<style lang="scss" scoped>
@import '../../assets/scss/breakpoints';
@import '../../assets/scss/colors';
@import '../../assets/scss/container';
@import '../../assets/scss/fonts';
@import '../../assets/scss/normalize';
@import '../../assets/scss/variables';
.header {
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem $side-spacing;
  background-color: $main-dark;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  column-gap: 0.5rem;

  &__icon {
    height: 2rem;
    width: 2rem;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: bold;
  }

  &__help {
    &__icon {
      fill: $secondary-dark;
    }
  }
}
</style>