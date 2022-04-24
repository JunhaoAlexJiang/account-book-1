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
      // recordList: JSON.parse(window.localStorage.getItem("recordList") || "[]"),
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
    created() {
      this.$store.commit("fetchRecords");
    },
    saveRecord() {
      this.$store.commit("createRecord");
    },
    //数据保存
    // saveRecord() {
    //   const record = JSON.parse(JSON.stringify(this.record));
    //   this.recordList.push(record);
    //   record.createdAt = new Date();
    // },
  },
  // watch: {
  //   //数据保存到localStorage
  //   recordList: function () {
  //     window.localStorage.setItem(
  //       "recordList",
  //       JSON.stringify(this.recordList)
  //     );
  //   },
  // },
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
