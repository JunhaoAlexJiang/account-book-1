<template>
  <NavLayoutStyle>
    <tabs-module />
  </NavLayoutStyle>
</template>

<script lang="ts">
import TabsModule from "@/components/MoneyView/TabsModule.vue";
export default {
  components: { TabsModule },
  name: "MoneyView",
};
</script>

<style lang="scss" scoped></style>
