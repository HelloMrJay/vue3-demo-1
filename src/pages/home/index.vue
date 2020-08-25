<template>
  <div class="home-container">
    <button class="button" @click="changeThemeHandler('blue')">点击换肤</button>
    <button class="button" @click="changeThemeHandler('green')">点击换肤</button>
    <div :style="{ background: theme || 'red', height: '90px', marginTop: '10px' }"></div>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'homePage',
  setup() {
    const store = useStore()
    const theme = computed(() => store.state.theme)
    const changeThemeHandler = (theme: string) => store.dispatch('changeThemeHandler', theme)

    return {
      changeThemeHandler,
      theme
    }
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  margin-top: 36px;
  .button {
    height: 35px;
    width: 80px;
    color: #ffffff;
    border: 0;
    border-radius: 6px;
    margin-left: 30px;
    cursor: pointer;
    user-select: none;

    &:hover {
      outline: none;
    }

    &:nth-child(1) {
      background: blue;
    }

    &:nth-child(2) {
      background: green;
    }
  }
}
</style>
