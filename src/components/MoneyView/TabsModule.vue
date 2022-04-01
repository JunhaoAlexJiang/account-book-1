<template>
  <div>
    <el-tabs type="border-card" :stretch="true" v-model="activeName">
      <el-tab-pane label="支出" name="1">
        <income-tags @update="updateIncome" />
      </el-tab-pane>
      <el-tab-pane label="收入" name="2">
        <expend-tags @update="updateExpend" />
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
  data() {
    return {
      activeName: "1",
    };
  },

  watch: {
    activeName: function (value) {
      this.$emit("update:tab", value);
    },
  },

  methods: {
    //支出收入标签数据中转
    updateIncome(value) {
      this.$emit("update:income", value);
    },
    updateExpend(value) {
      this.$emit("update:expend", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
