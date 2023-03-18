<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';
import PageFooter from '@/components/common/PageFooter.vue';
import PageHeader from '@/components/common/PageHeader.vue';

const route = useRoute();
const currentView = computed(() => route.name);
</script>

<template>
  <div class="baralho">
    <PageHeader />
    <RouterView />
    <PageFooter v-if="currentView === 'home'" />
  </div>
</template>

<style lang="scss">
@import './assets/scss/breakpoints';
@import './assets/scss/colors';
@import './assets/scss/container';
@import './assets/scss/fonts';
@import './assets/scss/normalize';
@import './assets/scss/variables';

.baralho {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  background-color: $main-dark;
  font-family: $font-sans;
  color: $secondary-dark;
}

html {
  overflow: hidden;
}
</style>
