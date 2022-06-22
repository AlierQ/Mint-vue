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
                <div class="money"><span>0</span>.00</div>
              </div>
              <div class="out">
                <div class="out-title">支出</div>
                <div class="money"><span>0</span>.00</div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template slot="content"> </template>
      <template slot="bottom">
        <Nav></Nav>
      </template>
    </Layout>
  </div>
</template>

<script lang="ts">
export default {
  name: "Detail",
};
</script>

<style lang="scss" scoped>
.top {
  background: #79c79f;
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
          color: #333333;
        }
        .money {
          color: #333333;
          span {
            font-size: 22px;
          }
        }
      }
      .out {
        .out-title {
          color: #333333;
        }
        .money {
          color: #333333;
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
        color: #333333;
        span {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
