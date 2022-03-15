<template>
  <div>
    <router-link to="/money"><svg-icon name="money" />记账</router-link>
    |
    <router-link to="/label"><svg-icon name="labels" />标签</router-link>
    |
    <router-link to="/statistics"
      ><svg-icon name="statistics" />统计</router-link
    >
  </div>
</template>

<script>
import SvgIcon from "./SvgIcon.vue";
export default {
  components: { SvgIcon },
};
</script>

<style lang="scss" scoped>
div {
  border: 1px solid;
}
</style>
