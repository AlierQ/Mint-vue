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
import dayjs from 'dayjs';
import clone from '@/lib/clone';
import getWeekOfYear from '@/lib/getWeekOfYear';
import getMonthOfYear from '@/lib/getMonthOfYear';
import getYear from '@/lib/getYear';
import {mixin} from '@/mixin';

@Component({
  components: {
    StatisticList,
    StatisticTop
  }
})

export default class Statistics extends Vue {
  type = '-';
  interval = 'week';
  groupList = this.groupWeek;

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
    mixin.methods.sortDateMax(recordList);
    let array = mixin.methods.recordGroup(getWeekOfYear,recordList);
    mixin.methods.sortAmountMax(array);
    return array;
  }

  get groupMonth() {
    const recordList = clone(this.recordList);
    mixin.methods.sortDateMax(recordList);
    let array = mixin.methods.recordGroup(getMonthOfYear,recordList);
    mixin.methods.sortAmountMax(array);
    return array;
  }
  get groupYear() {
    const recordList = clone(this.recordList);
    mixin.methods.sortDateMax(recordList);
    let array = mixin.methods.recordGroup(getYear,recordList);
    mixin.methods.sortAmountMax(array);
    return array;
  }

  @Watch('interval')
  onIntervalChange(newValue: string) {
    if (newValue === 'week') {
      this.groupList = this.groupWeek;
    } else if (newValue === 'month') {
      this.groupList = this.groupMonth;
    }else if (newValue === 'year') {
      this.groupList = this.groupYear;
    }
  }
  @Watch('type')
  onTypeChange() {
    this.onIntervalChange(this.interval);
  }
}
</script>

<style lang="scss" scoped></style>
