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
    // 排序
    recordList.sort((a: RecordItem, b: RecordItem) => {
      return dayjs(b.createTime).valueOf() - dayjs(a.createTime).valueOf();
    });

    let array = [{title: getWeekOfYear(recordList[0].createTime), items: [recordList[0]]}];
    for (let i = 1; i < recordList.length; i++) {
      const last = array.length - 1;
      if (getWeekOfYear(recordList[i].createTime) === array[last].title) {
        array[last].items.push(recordList[i]);
      } else {
        array.push({title: getWeekOfYear(recordList[i].createTime), items: [recordList[i]]});
      }
    }
    for (let i = 0; i < array.length; i++) {
      array[i].items.sort((a, b) => {
        return b.amount - a.amount;
      });
    }

    return array;
  }

  @Watch('interval')
  onIntervalChange(newValue: string) {
    if (newValue === 'week') {
      this.groupList = this.groupWeek;
    }
  }
}
</script>

<style lang="scss" scoped></style>
