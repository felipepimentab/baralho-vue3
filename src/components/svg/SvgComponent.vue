<script setup lang="ts">
import { defineProps, toRefs, computed, defineAsyncComponent } from 'vue';

const props = defineProps<{
  icon: String,
}>();
const { icon } = toRefs(props);

const IconComponent = computed(
  () => defineAsyncComponent(() => import(`./icons/Icon${icon.value}.vue`))
)
</script>

<template>
  <component :is="IconComponent" />
</template>