<template>
  <div class="home-container">
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
}
</style>
