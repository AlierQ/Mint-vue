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
              <div class="year">2022年</div>
              <div class="mouth"><span>06</span>月</div>
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
        <div class="record">
          <ul>
            <li v-for="(item,index) in recordList" :key="index">
              <div>
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

@Component({
  computed: {
    recordList() {
      return this.$store.state.recordList.filter((item: any) => {
        let nowDate = new Date();
        let recordDate = new Date(item.createTime);
        return recordDate.getFullYear() === nowDate.getFullYear() && recordDate.getMonth() === nowDate.getMonth();
      });
    },
    innumber() {
      let num = 0;
      (this as any).recordList.forEach((item: any) => {
        if (item.type === '+') {
          num += item.amount;
        }
      });
      if (num.toString().indexOf('.') !== -1) {
        return num.toString();
      } else {
        return num + '.00';
      }
    },
    outnumber() {
      let num = 0;
      (this as any).recordList.forEach((item: any) => {
        if (item.type === '-') {
          num += item.amount;
        }
      });
      if (num.toString().indexOf('.') !== -1) {
        return num.toString();
      } else {
        return num + '.00';
      }
    }
  }
})
export default class Detail extends Vue {

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

.record {
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      > div {
        display: flex;
        align-items: center;
        height: 48px;
        width: 96vw;
        margin-top: 10px;
        //border-top: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        //border-radius: 10px;

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
