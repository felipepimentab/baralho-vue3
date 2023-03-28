<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import { computed } from 'vue';
import CardButton from '@/components/common/CardButton.vue';
import PageHeader from '@/components/common/PageHeader.vue';
import PageFooter from '@/components/common/PageFooter.vue';

const route = useRoute();
const currentView = computed(() => route.name);
</script>

<template>
  <div class="baralho">
    <PageHeader />
    <RouterView />
    <CardButton v-if="currentView === 'home'" />
    <PageFooter />
  </div>
</template>

<style lang="scss">
@import '@/assets/global';

.baralho {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100vw;
  font-family: $font-sans;
  color: $secondary-dark;
  background-color: $main-dark;
}

html,
body {
  background-color: $main-dark;
  overflow-x: hidden;
  max-width: 100vw;
}
</style>
