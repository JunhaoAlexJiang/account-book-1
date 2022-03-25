<template>
  <div>
    <div class="number">0</div>
    <div class="numberPad">
      <el-button>1</el-button>
      <el-button>2</el-button>
      <el-button>3</el-button>
      <el-button>删除</el-button>

      <el-button>4</el-button>
      <el-button>5</el-button>
      <el-button>6</el-button>
      <el-button>清空</el-button>

      <el-button>7</el-button>
      <el-button>8</el-button>
      <el-button>9</el-button>
      <el-button class="ok">ok</el-button>

      <el-button>.</el-button>
      <el-button>0</el-button>
      <el-button>00</el-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.number {
  height: 8vh;
  font-size: 5vh;
  padding: 9px 16px;
  text-align: right;
  background: #f5f5f5;
}
.numberPad {
  &::clearfix {
    content: "";
    display: block;
    clear: both;
  }
  > button {
    margin: 0;
    width: 25%;
    height: 8vh;
    float: left;
  }
  > .ok {
    height: 16vh;
    float: right;
  }
}
</style>
