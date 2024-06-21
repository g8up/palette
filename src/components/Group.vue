<template>
  <div class="small-title" v-text="group.name" :id="group.name"></div>
  <ul class="color-group-list">
    <li
      v-for="(palette, index) in group.palettes"
      :key="index"
      class="color-group"
      :title="palette.name"
    >
      <Palette :colors="palette.palette" :format="format"/>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { IGroup, IFormat, } from '../types.ts';
import Palette from './Palette.vue';

defineProps<{ group: IGroup; format: IFormat }>();
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

ul,
ol,
li {
  list-style: none;
}
</style>
