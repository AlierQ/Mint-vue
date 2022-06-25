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
        <LabelList @get:checked="getCheckedTag"
                   :tagsData="type === '-'?outTagsData:inTagsData"
                   :type="type"></LabelList>
      </template>
      <template slot="bottom">
        <InputPad @submit="saveRecord"
                  @get:inputPadData="getInputPadData"></InputPad>
      </template>
    </Layout>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';
import InputPad from '@/components/InputPad.vue';
import LabelList from '@/components/LabelList.vue';
import clone from '@/lib/clone';

// 装饰器
@Component({
  // ts引入组件
  components: {
    LabelList,
    InputPad,
  },
  computed: {
    outTagsData() {
      return this.$store.state.outTagsData;
    },
    inTagsData() {
      return this.$store.state.inTagsData;
    },
    recordList() {
      return this.$store.state.recordList;
    }
  }
})
export default class Add extends Vue {
  type = '-'; // '-' 表示支出 '+' 表示收入
  record: RecordItem = {type: this.type, tag: '', remake: '', amount: 0};

  selectType(type: string) {
    if (type === '-' || type === '+') this.type = type;
    else throw new Error('type is unknown');
  }

  // 获取选择标签的回调
  getCheckedTag(iconName: string, id: string) {
    this.record.tag = iconName;
  }

  // 获取输入面板内容的
  getInputPadData(output: string, remake: string) {
    this.record.amount = Number(output);
    this.record.remake = remake;
  }

  // 保存一条记录到所有记录中
  saveRecord() {
    // 这里push之后再添加会改变前面的值
    // 解决方式:做一下深拷贝深拷贝
    const recordClone = clone(this.record);
    this.$store.commit('CREATE_RECORD', recordClone);
  }

  @Watch('type')
  onTypeChange(newValue: string) {
    this.record.type = newValue;
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
