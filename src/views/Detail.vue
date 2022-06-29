/**
* @Description:
* @author AlierQ
* @date 20/6/2022
*/
<template>
  <div>
    <Layout>
      <!-- 可以使用template进行插入插槽，不会产生多余元素 -->
      <template slot="top">
        <div class="top">
          <div class="title">薄荷流水</div>
          <div class="money-record">
            <div class="date">
              <div class="year">{{ year }}年</div>
              <div class="mouth"><span>{{ month }}</span>月</div>
            </div>
            <div class="line"></div>
            <div class="data">
              <div class="in">
                <div class="in-title">收入</div>
                <div class="money"><span>{{ innumber }}</span></div>
              </div>
              <div class="out">
                <div class="out-title">支出</div>
                <div class="money"><span>{{ outnumber }}</span></div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template slot="content">
        <div class="recordContainer">
          <div v-for="(group,index) in dayDate" :key="index">
            <div class="recordDate">
              <div>{{ group.title }}</div>
              <div>
                {{ group.inSum !== 0 ? '收入：' + toFixed2(group.inSum) : '' }}
                {{ group.outSum !== 0 ? '&nbsp;&nbsp;支出：' + toFixed2(group.outSum) : '' }}
              </div>
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
      <template slot="bottom">
        <Nav></Nav>
      </template>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import toFixed from '@/lib/toFixed';
import getDateAndWeek from '@/lib/getDateAndWeek';
import clone from '@/lib/clone';
import {mixin} from '@/mixin';

@Component
export default class Detail extends Vue {

  get recordList(): RecordItem[] {
    if (this.$store.state.recordList.length === 0) {
      return [];
    } else {
      return this.$store.state.recordList.filter((item: RecordItem) => {
        let nowDate = new Date();
        let recordDate = new Date(item.createTime);
        return recordDate.getFullYear() === nowDate.getFullYear() && recordDate.getMonth() === nowDate.getMonth();
      });
    }
  }

  get dayDate() {
    // sort会操作原数组，这里克隆过一个新的数组进行操作
    const recordList = clone(this.recordList);
    if(recordList.length === 0){
      return [];
    }
    mixin.methods.sortDateMax(recordList);
    let array = mixin.methods.recordGroup(getDateAndWeek, recordList);
    mixin.methods.calculateInSumAndOutSum(array);
    return array;
  }

  get innumber() {
    let num = 0;
    this.recordList.forEach((item: any) => {
      if (item.type === '+') {
        num += item.amount;
      }
    });
    return toFixed(num, 2);
  }

  get outnumber() {
    let num = 0;
    this.recordList.forEach((item: any) => {
      if (item.type === '-') {
        num += item.amount;
      }
    });
    return toFixed(num, 2);
  }

  get year() {
    const date = new Date();
    return date.getFullYear();
  }

  get month() {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
      return '0' + month;
    } else {
      return month;
    }
  }

  toFixed2(value: number) {
    return toFixed(value, 2);
  }

  beforeDestroy() {
    this.$store.commit('SAVE_ALL');
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.top {
  background: $color-basic;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .title {
    font-weight: 500;
    font-size: 24px;
    color: #333333;
    margin-top: 10px;
  }

  .money-record {
    //border: 1px solid blue;
    align-self: flex-start;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 20px;
    margin-top: 20px;

    .data {
      display: flex;

      .in {
        margin-right: 80px;

        .in-title {
          color: $color-font;
        }

        .money {
          color: $color-font;

          span {
            font-size: 22px;
          }
        }
      }

      .out {
        .out-title {
          color: $color-font;
        }

        .money {
          color: $color-font;

          span {
            font-size: 22px;
          }
        }
      }
    }

    .line {
      width: 0;
      height: 50px;
      border: 1px solid #333333;
      margin: 0 30px;
    }

    .date {
      .year {
        color: #595959;
      }

      .mouth {
        color: $color-font;

        span {
          font-size: 24px;
        }
      }
    }
  }
}

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
    font-size: 15px;
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
