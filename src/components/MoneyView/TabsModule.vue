<template>
  <div>
    <el-tabs type="border-card" stretch="true">
      <el-tab-pane label="支出">
        <income-tags />
      </el-tab-pane>
      <el-tab-pane label="收入">
        <expend-tags />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ExpendTags from "./ExpendTags.vue";
import IncomeTags from "./IncomeTags.vue";
export default {
  components: { IncomeTags, ExpendTags },
  name: "TabsMod",
};
</script>

<style lang="scss" scoped></style>
