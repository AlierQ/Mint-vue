<template>
  <div>
    <ul>
      <li v-for="(item,index) in tagsData" :key="index">
        <div class="delete" @click="deleteLabel(item.id)">
          <Icon name="delete"></Icon>
        </div>
        <div class="content">
          <div class="tu">
            <Icon :name="item.iconName"></Icon>
          </div>
          <div @click="updateNotes(item)">{{ item.notes }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class LabelEditList extends Vue {
  @Prop(Array) tagsData: any[] | undefined;

  deleteLabel(id: string) {
    if (this.tagsData !== undefined) {
      const arr = this.tagsData.filter((item: any) => {
        return item.id !== id;
      });
      // 自定义事件,传回处理过后的参数
      this.$emit('update:tagsData', arr);
    }
  }

  updateNotes(item:any){
    item.notes = prompt('请输入新的内容：')
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: $color-font;

  li {
    //border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    height: 50px;
    width: 90vw;
    display: flex;
    align-items: center;

    .delete {
      margin-right: 15px;

      > .icon {
        fill: #EB4D3D;
        width: 30px;
        height: 30px;
      }
    }

    .content {
      display: flex;

      .tu {
        margin-right: 15px;
      }

      .icon {
        width: 22px;
        height: 22px;
      }
    }
  }
}

</style>