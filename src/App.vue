<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageFooter from '@/components/common/PageFooter.vue';
import PageHeader from '@/components/common/PageHeader.vue';
</script>

<template>
  <div class="baralho">
    <PageHeader />
    <RouterView />
    <PageFooter />
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
  width: 100%;
}
</style>
