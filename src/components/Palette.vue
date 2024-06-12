<template>
  <div class="color-block">
    <span
      v-for="color in colors"
      :key="color.val"
      class="color"
      :style="`background-color:${color.val}`"
      :data-color="`${color.name ?? color.val}`"
      @click="() => copyColor(color.val)"
      :title="color.val"
    ></span>
  </div>
</template>

<script lang="ts" setup>
import { IColors } from '../types.ts';
const props = defineProps<{
  colors: IColors[];
  copyWithSharp: boolean;
  isUppercase: boolean;
}>();

const copyText = (text: string) => {
  if (text !== undefined && text !== '') {
    var cont = document.createElement('textarea');
    cont.value = text;
    document.body.appendChild(cont);

    cont.select();
    document.execCommand('copy');
    cont.remove();
  }
};

const copyColor = (color: string) => {
  console.log(props.copyWithSharp);
  if (!props.copyWithSharp) {
    color = color.replace('#', '');
  }
  if (props.isUppercase) {
    color = color.toUpperCase();
  } else {
    color = color.toLowerCase();
  }
  copyText(color);
};
</script>

<style scoped>
.color-block {
  background: #f1f4f7;
  border: 4px solid #f1f4f7;
  box-shadow: -6px -6px 6px rgba(255, 255, 255, 0.8), 6px 6px 6px #e0e4eb;
  border-radius: 10px;
  width: 182px;
  height: 66px;
  color: #172948;
  font-size: 12px;
  display: flex;
  margin-bottom: 30px;
}
.color-block .color {
  display: block;
  flex: 1 0 0;
  position: relative;
}
.color-block .color:hover {
  color: currentColor;
  opacity: 0.8;
}
.color-block .color:first-child {
  border-radius: 10px 0 0 10px;
}
.color-block .color:last-child {
  border-radius: 0 10px 10px 0;
}
.color-block .color::before {
  content: attr(data-color);
  position: absolute;
  left: 50%;
  top: 100%;
  width: 100%;
  transform: translate(-50%, 14px);
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
}
</style>
