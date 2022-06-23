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
          <div class="close">取消</div>
        </div>
      </template>
      <template slot="content">这里是内容</template>
      <template slot="bottom">
        <InputPad></InputPad>
      </template>
    </Layout>
  </div>
</template>

<script lang="ts">
//import InputPad from '@/components/InputPad.vue';
// js编写组件
// export default {
//   name: 'ADD',
//   components: {InputPad},
//   data() {
//     return {
//       type: '-', // '-' 表示支出 '+' 表示收入
//     }
//   },
//   methods: {
//     selectType(type) {
//       if (type === '-' || type === '+') this.type = type
//       else throw new Error('type is unknown')
//     },
//   },
// }

// ts编写组件
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import InputPad from '@/components/InputPad.vue';
// 装饰器
@Component({
  // ts引入组件
  components: {
    InputPad
  }
})
export default class Types extends Vue {
  // @Prop告诉Vue test不是data而是prop
  // (Number)告诉Vue test是个number  ”作用在运行时“
  // number | undefined TS编译时指定的类型  ”作用在编译时“
  @Prop(Number) test: number | undefined;
  type = '-'; // '-' 表示支出 '+' 表示收入
  selectType(type: string) {
    if (type === '-' || type === '+') this.type = type;
    else throw new Error('type is unknown');
    console.log(this.test);
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
