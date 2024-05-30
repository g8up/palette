<script setup lang="ts">
import Group from './components/Group.vue';
import { IGroup, IColors } from './types.d.ts';

const group: IGroup = {
  name: 'sigma',
  palettes: [
    [{ val: 'red', name: '血色浪漫' }, { val: 'green' }, { val: '#99cccc' }],
    [{ val: 'red' }, { val: 'green' }, { val: '#99cccc' }],
  ],
};
</script>

<template>
  <Group :group="group" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
