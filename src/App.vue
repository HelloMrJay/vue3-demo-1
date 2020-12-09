<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'app',
  setup() {
    const store = useStore()
    const theme = computed(() => store.state.theme)

    return {
      theme
    }
  }
})
</script>

<style lang="scss">
@import "./index.scss";
</style>
