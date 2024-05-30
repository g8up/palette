<script setup lang="ts">
import { computed, } from 'vue';
import Group from './components/Group.vue';
import { IGroup, IColors } from './types.d.ts';
import groups from './groups.json' with {type: 'json'};

const group: IGroup = {
  name: 'sigma',
  palettes: [
    [{ val: 'red', name: '血色浪漫' }, { val: 'green' }, { val: '#99cccc' }],
    [{ val: 'red' }, { val: 'green' }, { val: '#99cccc' }],
  ],
};

const content = computed(()=>{
  return groups.map(group=>group.name);
});
</script>

<template>
<div class="page">
  <div class="content">
    <ul>
      <li v-for="title in content" :key="title">
        <div><a v-text="title" :href="`#${title}`"></a></div>
      </li>
    </ul>
  </div>
  <div class="groups">
    <Group v-for="group in groups" :group="group" :key="group.name"/>
  </div>
</div>
</template>

<style scoped>
.page{
  display: flex;
}
.content {
  width: 300px;
}
.content ul{
  position: fixed;
}
.groups{
  flex: 1;
}
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
