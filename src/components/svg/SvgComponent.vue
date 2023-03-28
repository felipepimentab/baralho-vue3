<script setup lang="ts">
import { defineProps, toRefs, computed, defineAsyncComponent } from 'vue';

const props = defineProps<{
  icon: String,
  title: String,
}>();
const { icon, title } = toRefs(props);

const IconComponent = computed(
  () => defineAsyncComponent(() => import(`./icons/Icon${icon.value}.vue`))
)
</script>

<template>
  <component :is="IconComponent" :title="title ? title : icon"/>
</template>