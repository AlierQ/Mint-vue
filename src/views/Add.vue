/**
* @Description:
* @author AlierQ
* @date 20/6/2022
*/
<template>
  <div>
    <Layout>
      <!-- 调用子组件并且将内容插到子元素内部的插槽中 -->
      <!-- 通过slot属性指定某一个插槽 -->
      <template slot="top">
        <div class="top">
          <!-- 已有基础样式元素，添加样式的方式，更推荐后一种，多个class属性会合并 -->
          <div
            :class="type === '-' ? 'out selected' : 'out'"
            @click="selectType('-')">支出
          </div>
          <!-- type === '+'为false默认会被忽略 -->
          <div
            class="in"
            :class="type === '+' && 'selected'"
            @click="selectType('+')">收入
          </div>
          <router-link to="/" class="close">取消</router-link>
        </div>
      </template>
      <template slot="content">
        <OutIconList ></OutIconList>
      </template>
      <template slot="bottom">
        <InputPad></InputPad>
      </template>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import InputPad from '@/components/InputPad.vue';
import OutIconList from '@/components/OutIconList.vue';
// 装饰器
@Component({
  // ts引入组件
  components: {
    InputPad,
    OutIconList
  }
})
export default class Add extends Vue {
  type = '-'; // '-' 表示支出 '+' 表示收入
  selectType(type: string) {
    if (type === '-' || type === '+') this.type = type;
    else throw new Error('type is unknown');
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.top {
  height: 80px;
  background: $color-basic;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 10px;

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
  .close {
    position: absolute;
    right: 20px;
    font-size: 18px;
  }
}
</style>
