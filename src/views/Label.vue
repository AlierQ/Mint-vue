<template>
  <div>
    <Layout>

      <template slot="top">
        <div class="top">
          <div class="back-and-title">
            <router-link to="/add" class="back">
              <Icon name="back"></Icon>
              <span>返回</span>
            </router-link>
            <div class="title">
              标签设置
            </div>
          </div>
          <div class="in-and-out">
            <div @click="select('-')" class="in" :class="type === '-' && 'selected'">支出</div>
            <div @click="select('+')" class="out" :class="type === '+' && 'selected'">收入</div>
          </div>
        </div>
      </template>
      <template slot="content">
        <LabelEditList @update:tagsData="update" :tagsData="type==='-'?outTagsData:inTagsData"></LabelEditList>
        {{outTagsData}}
      </template>
      <template slot="bottom">
        <div class="bottom" @click="create">
          <div class="add-label">+添加标签</div>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Watch} from 'vue-property-decorator';
import Layout from '@/components/Layout.vue';
import LabelEditList from '@/components/LabelEditList.vue';
import LabelModel from '@/models/labelModel';

@Component({
  components: {
    Layout,
    LabelEditList
  }
})
export default class Label extends Vue {
  type = '-';
  outTagsData = LabelModel.fetch('outTags')
  inTagsData = LabelModel.fetch('inTags')
  // outTagsDatat = [{id:1,iconName: 'catering', notes: '餐饮'}, {id:2,iconName: 'shopping', notes: '购物'}];
  // inTagsDatat = [{id:1 ,iconName:'wage', notes: '工资'}];

  select(type: string) {
    this.type = type;
  }

  create() {
    if (this.type === '-') {
      this.outTagsData.push({id:''+Math.random(),iconName: 'dayuse', notes: '日用'});
    } else {
      this.inTagsData.push({id:''+Math.random(),iconName: 'parttime', notes: '兼职'});
    }
  }

  @Watch('outTagsData')
  onOutTagsDataChange(){
    LabelModel.save('outTags',this.outTagsData)
  }

  @Watch('inTagsData')
  onInTagsDataChange(){
    LabelModel.save('inTags',this.inTagsData)
  }

  update(arr:any){
    if(this.type==='-'){
      this.outTagsData = arr;
    }else{
      this.inTagsData = arr;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.top {
  height: 130px;
  background: #79c79f;
  display: flex;
  color: $color-font;
  flex-direction: column;
  justify-content: flex-end;

  .back-and-title {
    display: flex;
    justify-content: center;

    .back {
      position: absolute;
      padding-top: 5px;
      left: 15px;

      .icon {
        width: 18px;
        height: 18px;
      }

      span {
        font-size: 18px;
      }
    }

    .title {
      font-size: 22px;
      margin-bottom: 10px;
    }
  }

  .in-and-out {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    .in, .out {
      font-size: 20px;
      margin: 0 40px;
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
}

.bottom {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  .add-label {
    font-size: 20px;
  }
}
</style>