<template>
  <div class="recordContainer">
    <div v-for="(group,index) in groupList" :key="index">
      <div class="recordDate">
        <div>{{ group.title }}</div>
        <div>共计：{{ toFixed2(group.sum) }}</div>
      </div>
      <ul>
        <li v-for="(item,index) in group.items" :key="index">
          <div class="record">
            <div class="icon-container">
              <Icon :name="item.tag"></Icon>
            </div>
            <div class="remark">
              {{ item.remake }}
            </div>
            <div class="money-number">
              {{ item.type + '' + item.amount }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import toFixed from '@/lib/toFixed';

@Component
export default class StatisticList extends Vue {
  @Prop(String) type: string | undefined;
  @Prop(String) interval: string | undefined;
  @Prop() groupList: any | undefined;

  toFixed2(value: number) {
    return toFixed(value, 2);
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.recordContainer {
  display: flex;
  flex-direction: column;
  align-items: center;

  .recordDate {
    padding: 0 10px;
    color: #666;
    width: 96vw;
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      > .record {
        display: flex;
        align-items: center;
        height: 54px;
        width: 96vw;
        border-top: 1px solid rgba(0, 0, 0, 0.1);

        .icon-container {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: $color-basic;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 10px;

          .icon {
            width: 22px;
            height: 22px;
            fill: #545353;
          }
        }

        .remark {
          flex-grow: 1;
        }

        .money-number {
          margin-right: 10px;
          font-size: 18px;
        }
      }
    }
  }
}
</style>