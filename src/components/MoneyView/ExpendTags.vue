<template>
  <div class="TagsContainer">
    <el-tag
      :key="tag"
      v-for="tag in dynamicTags"
      closable
      :disable-transitions="false"
      :class="{ selected: selectedTags.indexOf(tag) >= 0 }"
      @close="handleClose(tag)"
      @click="toggle(tag)"
    >
      {{ tag }}
    </el-tag>
    <el-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input>
    <el-button v-else class="button-new-tag" @click="showInput"
      >+ 新增标签</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicTags: ["工资", "奖金", "副业"],
      inputVisible: false,
      inputValue: "",
      selectedTags: [],
    };
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },

    //选中标签变色
    toggle(tag) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(tag);
      }
      this.$emit("update", this.selectedTags);
    },
  },
};
</script>

<style lang="scss" scoped>
.TagsContainer {
  overflow: auto;
}
.TagsContainer::-webkit-scrollbar {
  display: none;
}
.el-tag {
  &.selected {
    background: rgb(160, 197, 232);
    color: white;
  }
  margin-left: 10px;
  margin-top: 10px;
}
.el-tag + .el-tag {
  margin-left: 10px;
  margin-top: 10px;
}
.button-new-tag {
  margin-left: 10px;
  margin-top: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
