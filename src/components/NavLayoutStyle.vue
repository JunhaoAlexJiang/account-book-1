<template>
  <div class="nav">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot />
    </div>
    <MainNav />
  </div>
</template>

<script lang="ts">
export default {
  props: ["classPrefix"],
  name: "NavLayoutStyle",
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.content {
  flex-grow: 1;
  overflow: auto;
}
</style>
