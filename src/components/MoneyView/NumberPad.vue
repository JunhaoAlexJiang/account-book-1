<template>
  <div>
    <div class="number">{{ output }}</div>
    <div class="numberPad">
      <el-button @click="inputContent">1</el-button>
      <el-button @click="inputContent">2</el-button>
      <el-button @click="inputContent">3</el-button>
      <el-button @click="remove">删除</el-button>

      <el-button @click="inputContent">4</el-button>
      <el-button @click="inputContent">5</el-button>
      <el-button @click="inputContent">6</el-button>
      <el-button @click="clear">清空</el-button>

      <el-button @click="inputContent">7</el-button>
      <el-button @click="inputContent">8</el-button>
      <el-button @click="inputContent">9</el-button>
      <el-button @click="ok" class="ok">ok</el-button>

      <el-button @click="inputContent">.</el-button>
      <el-button @click="inputContent">0</el-button>
      <el-button @click="inputContent">00</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class NumberPad extends Vue {
  output = "0";
  inputContent(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;
    const input = button.textContent as string;
    if (this.output.length >= 7) {
      return;
    }
    if (this.output === "0") {
      if ("0123456789".indexOf(input) >= 0) {
        this.output = input;
      } else if (".".indexOf(input) >= 0) {
        this.output += input;
      }
      return;
    }
    if (this.output.indexOf(".") >= 0 && input === ".") {
      return;
    }

    this.output += input;
  }
  remove() {
    if (this.output.length === 1) {
      this.output = "0";
    } else {
      this.output = this.output.slice(0, -1);
    }
  }
  clear() {
    this.output = "0";
  }
  ok() {
    this.$emit("update:value", this.output);
  }
}
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
    font-size: 2.5vh;
  }
  > .ok {
    height: 16vh;
    float: right;
  }
}
</style>
