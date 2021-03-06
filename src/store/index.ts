import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

type RecordItem = {
  tabs: string;
  income: string[];
  expend: string[];
  compute: number; // 数据类型 object | string
  createdAt?: Date; // 类 / 构造函数
};
type TagItem = {
  tags: string[];
};

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as TagItem[],
  },
  mutations: {
    fetchRecords(state) {
      state.recordList = JSON.parse(
        window.localStorage.getItem("recordList") || "[]"
      );
      return this.recordList;
    },
    createRecord(state, record) {
      const record2: RecordItem = JSON.parse(JSON.stringify(record));
      state.recordList.push(record2);
      record2.createdAt = new Date();
      store.commit("saveRecords");
    },
    saveRecords(state) {
      window.localStorage.setItem(
        "recordList",
        JSON.stringify(state.recordList)
      );
    },
  },
});
export default store;
