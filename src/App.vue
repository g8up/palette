<script setup lang="ts">
import { ref, computed, } from 'vue';
import Group from './components/Group.vue';
import groups from './groups.json' with {type: 'json'};

const format = ref<IFormat>({
  /** 复制时是否带# */
  copyWithSharp: true,
  /** 是否大写 */
  isUppercase: true,
  isRGB: false,
  /** rgb 颜色格式是否带括号： rgb() */
  isRGBWithBracket: false,
});

const content = computed(() => {
  return groups.map(group => group.name);
});
</script>

<template>
  <div class="page">
    <div class="content">
      <div>
        <ul>
          <li v-for="title in content" :key="title">
            <div>
              <a v-text="title" :href="`#${encodeURIComponent(title)}`"></a>
            </div>
          </li>
        </ul>
        <p>Click to Copy</p>
        <label> <input v-model="format.copyWithSharp" type="checkbox" />With # </label>
        <label> <input v-model="format.isUppercase" type="checkbox" />Uppercase</label>
        <p>
          <label> <input v-model="format.isRGB" type="checkbox" />RGB</label>
          <label> <input v-model="format.isRGBWithBracket" type="checkbox" />with Bracket</label>
        </p>
      </div>
    </div>
    <div class="groups">
      <Group v-for="group in groups" :group="group" :key="group.name" :format="format" />
    </div>
  </div>
</template>

<style scoped>
.page {
  display: flex;
}

.content {
  width: 300px;
  max-height: 100vh;
  overflow-y: scroll;
}

.content>div {
  position: fixed;
}

.groups {
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
