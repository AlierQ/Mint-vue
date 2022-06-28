<template>
  <div class="container">
    <div class="top">
      <!-- 已有基础样式元素，添加样式的方式，更推荐后一种，多个class属性会合并 -->
      <div
        :class="type === '-' ? 'out selected' : 'out'"
        @click="type='-'">支出
      </div>
      <!-- type === '+'为false默认会被忽略 -->
      <div
        class="in"
        :class="type === '+' && 'selected'"
        @click="type='+'">收入
      </div>
    </div>
    <div class="bottom">
      <div @click="selectedTime='week'" :class="selectedTime ==='week' && 'selected'">周</div>
      <div @click="selectedTime='month'" :class="selectedTime ==='month' && 'selected'">月</div>
      <div @click="selectedTime='year'" :class="selectedTime ==='year' && 'selected'">年</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class StatisticTop extends Vue {
  type = '-';
  selectedTime = 'week';
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.container {
  display: flex;
  flex-direction: column;
  background: $color-basic;
  .top {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 10px;
    margin-bottom: 10px;
    .in,
    .out {
      font-size: 22px;
      margin: 0 10px;
      position: relative;

      &.selected {
        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: #333;
        }
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    div {
      border: 1px solid #1C1D1F;
      width: 30%;
      text-align: center;
      &.selected {
        background: #1C1D1F;
        color: $color-basic;
      }
    }
    div:nth-child(1){
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      border-right: 0;
    }
    div:nth-child(2){
      border-right: 0;
    }
    div:nth-child(3){
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
}
</style>