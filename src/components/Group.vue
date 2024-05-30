<template>
  <div class="small-title" v-text="group.name"></div>
  <ul class="color-group-list">
    <li class="color-group">
      <Palette
        v-for="palette in group.palettes"
        :key="index"
        :colors="palette"
      />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { IGroup, IColors } from '../types.d.ts';
import Palette from './Palette.vue';

defineProps<{ group: IGroup }>();
</script>

<style>
.small-title {
  width: 100%;
  font-size: 18px;
  line-height: 31px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(55, 139, 255, 0.1);
  color: #595975;
}

.color-group-list {
  display: flex;
  flex-flow: row wrap;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 8px;
}
.color-group-list > li:nth-child(-n + 5) {
  margin-top: 0;
}

.color-group-list > li {
  margin: 47px 7px 0;
}
ul,
ol,
li {
  list-style: none;
}
</style>
