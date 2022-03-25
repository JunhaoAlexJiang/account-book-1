<template>
  <NavLayoutStyle classPrefix="layout">
    <tabs-module class="tabs" />
    <number-pad />
  </NavLayoutStyle>
</template>

<script>
import TabsModule from "@/components/MoneyView/TabsModule.vue";
import NumberPad from "@/components/MoneyView/NumberPad.vue";
export default {
  components: { TabsModule, NumberPad },
  name: "MoneyView",
};
</script>

<style lang="scss" scoped></style>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
}
.tabs {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  > .el-tabs--border-card {
    flex-grow: 1;
  }
}
</style>
