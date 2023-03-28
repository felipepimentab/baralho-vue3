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
    <Transition name="fade" mode="out-in">
      <router-link
        v-if="currentView === 'home'"
        :to="{ name: 'help' }"
        class="header__help"
        >
        <SvgComponent
          icon="Help"
          title="Ajuda"
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
          title="Voltar"
          class="header__help__icon"
        />
      </router-link>
    </Transition>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/global';
.header {
  width: 100%;
  padding: 1rem $side-spacing;
  background-color: $main-dark;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  column-gap: 0.5rem;

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
    position: sticky;
    top: 1rem;
    
    &:focus {
      outline: none;
    }

    &__icon {
      width: 1.5rem;
      height: 1.5rem;
      fill: $secondary-dark;
    }
  }

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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>