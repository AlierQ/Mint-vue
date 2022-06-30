<template>
  <div>
    <Layout>
      <template slot="top">
        <StatisticTop :type="type"
                      :interval="interval"
                      @update:type="updateType"
                      @update:time="updateInterval"></StatisticTop>

      </template>
      <template slot="content">
        <StatisticEcharts :option="option"></StatisticEcharts>
        <StatisticList :type="type"
                       :interval="interval"
                       :groupList="groupList"></StatisticList>

      </template>
      <template slot="bottom">
        <Nav></Nav>
      </template>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import StatisticTop from '@/components/StatisticTop.vue';
import StatisticList from '@/components/StatisticList.vue';
import clone from '@/lib/clone';
import getWeekOfYear from '@/lib/getWeekOfYear';
import getMonthOfYear from '@/lib/getMonthOfYear';
import getYear from '@/lib/getYear';
import {mixin} from '@/mixin';
import StatisticEcharts from '@/components/StatisticEcharts.vue';
import getEchartsX from '@/lib/getEchartsX';
import getEchartsY from '@/lib/getEchartsY';

@Component({
  components: {
    StatisticEcharts,
    StatisticList,
    StatisticTop
  }
})

export default class Statistics extends Vue {
  type = '-';
  interval = 'week';
  groupList = this.groupWeek;
  option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['支出'],
      show: false
    },
    grid: {
      top: '10%',
      left: '4%',
      right: '6%',
      bottom: '2%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      data: this.echartsX
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '支出',
        color:'#5470C6',
        type: 'line',
        stack: 'Total',
        // data: [220, 191, 191, 234, 290, 330, 310]
        data: this.echartsY
      }
    ]
  };

  updateType(value: string) {
    this.type = value;
  }

  updateInterval(value: string) {
    this.interval = value;
  }

  get recordList() {
    const recordList = this.$store.state.recordList as RecordItem[];
    if (this.type === '-') {
      return recordList.filter((record: RecordItem) => {
        return record.type === '-';
      });
    } else {
      return recordList.filter((record: RecordItem) => {
        return record.type === '+';
      });
    }
  }

  get groupWeek() {
    const recordList = clone(this.recordList);
    if (recordList.length === 0)
      return [];
    mixin.methods.sortDateMax(recordList);
    let array = mixin.methods.recordGroup(getWeekOfYear, recordList);
    mixin.methods.sortAmountMax(array);
    mixin.methods.calculateSum(array);

    return array;
  }

  get groupMonth() {
    const recordList = clone(this.recordList);
    if (recordList.length === 0) {
      return [];
    }
    mixin.methods.sortDateMax(recordList);
    let array = mixin.methods.recordGroup(getMonthOfYear, recordList);
    mixin.methods.sortAmountMax(array);
    mixin.methods.calculateSum(array);
    return array;
  }

  get groupYear() {
    const recordList = clone(this.recordList);
    if (recordList.length === 0) {
      return [];
    }
    mixin.methods.sortDateMax(recordList);
    let array = mixin.methods.recordGroup(getYear, recordList);
    mixin.methods.sortAmountMax(array);
    mixin.methods.calculateSum(array);
    return array;
  }

  get echartsX() {
    return getEchartsX(this.groupList, this.interval);
  }

  get echartsY() {
    return getEchartsY(this.groupList, this.interval, this.echartsX as []);
  }

  @Watch('interval')
  onIntervalChange(newValue: string) {
    if (newValue === 'week') {
      this.groupList = this.groupWeek;
    } else if (newValue === 'month') {
      this.groupList = this.groupMonth;
    } else if (newValue === 'year') {
      this.groupList = this.groupYear;
    }
    this.option.xAxis.data = this.echartsX;
    this.option.series[0].data = this.echartsY;
  }

  @Watch('type')
  onTypeChange(newValue: string) {
    this.onIntervalChange(this.interval);
    if (newValue === '-') {
      this.option.series[0].name = '支出';
      this.option.series[0].color = '#5470C6';
    } else if (newValue === '+') {
      this.option.series[0].name = '收入';
      this.option.series[0].color = '#91cc75';
    }
  }
}
</script>

<style lang="scss" scoped></style>
