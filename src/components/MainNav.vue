<template>
  <div class="nav-style">
    <router-link to="/money" class="item" active-class="selected">
      <svg-icon name="money" class="icon" />记账
    </router-link>
    <router-link to="/label" class="item" active-class="selected">
      <svg-icon name="labels" class="icon" />标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <svg-icon name="statistics" class="icon" />统计
    </router-link>
  </div>
</template>

<script>
import SvgIcon from "./SvgIcon.vue";
export default {
  components: { SvgIcon },
};
</script>

<style lang="scss" scoped>
.nav-style {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  flex-direction: row;
  font-size: 12px;
  > .item {
    padding: 2px 0;
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
  > .item.selected {
    background: rgb(160, 197, 232);
  }
}
</style>
