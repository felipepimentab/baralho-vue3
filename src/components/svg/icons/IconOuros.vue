<script lang="ts" setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps<{
  title: String,
}>();
const { title } = toRefs(props);
</script>

<template>
<svg width="800px" height="800px" viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
	<title>{{ title }}</title>
  <path d="m 6.999995,1 c -1.2494,2.0791 -2.65591,4.0791 -4.08487,6 1.49629,1.9209 2.92525,3.9209 4.08487,6 1.20452,-2.1187 2.52125,-4.1385 4.08488,-6 C 9.566135,5.0791 8.182065,3.0396 6.999995,1 Z"/>
</svg>
</template>