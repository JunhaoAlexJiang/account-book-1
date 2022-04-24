<template>
  <NavLayoutStyle classPrefix="layout">
    <tabs-module
      @update:tab="onUpdateTabs"
      @update:income="onUpdateIncome"
      @update:expend="onUpdateExpend"
      class="tabs"
    />
    <number-pad @update:value="onUpdateCompute" @submit="saveRecord" />
  </NavLayoutStyle>
</template>

<script>
import TabsModule from "@/components/MoneyView/TabsModule.vue";
import NumberPad from "@/components/MoneyView/NumberPad.vue";

export default {
  components: { TabsModule, NumberPad },
  name: "MoneyView",
  data() {
    return {
      record: {
        tabs: "1",
        income: [],
        expend: [],
        compute: 0,
        createdAt: Date,
      },
    };
  },
  methods: {
    //各组件数据
    onUpdateTabs(value) {
      this.record.tabs = value;
    },
    onUpdateIncome(value) {
      this.record.income = value;
    },
    onUpdateExpend(value) {
      this.record.expend = value;
    },
    onUpdateCompute(value) {
      this.record.compute = value;
    },

    saveRecord() {
      this.$store.commit("createRecord", this.record);
    },
  },

  created() {
    this.$store.commit("fetchRecords");
  },

  computed: {
    recordList() {
      return this.$store.state.recordList;
    },
  },
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
