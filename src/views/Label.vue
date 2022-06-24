<template>
  <div>
    <Layout>
      <template slot="top">
        <div class="top">
          <router-link to="/add" class="back-and-title">
            <div class="back">
              <Icon name="back"></Icon>
              <span>返回</span>
            </div>
            <div class="title">
              标签设置
            </div>
          </router-link>
          <div class="in-and-out">
            <div class="in" :class="type === '-' && 'selected'">支出</div>
            <div class="out" :class="type === '+' && 'selected'">收入</div>
          </div>
        </div>
      </template>
      <template slot="content">内容</template>
      <template slot="bottom">
        <div class="bottom">
          <div class="add-label">+添加标签</div>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Layout from '@/components/Layout.vue';

@Component({
  components: {
    Layout
  }
})
export default class Label extends Vue {
  type = '-';
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.top {
  height: 130px;
  background: #79c79f;
  display: flex;
  color:$color-font;
  flex-direction: column;
  justify-content: flex-end;

  .back-and-title {
    display: flex;
    justify-content: center;

    .back {
      position: absolute;
      padding-top: 5px;
      left: 15px;
      .icon{
        width: 18px;
        height: 18px;
      }
      span{
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
.bottom{
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  .add-label{
    font-size: 20px;
  }
}
</style>