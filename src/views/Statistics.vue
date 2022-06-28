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
                       :interval="interval"></StatisticList>
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
import StatisticTop from '@/components/StatisticTop.vue';
import StatisticList from '@/components/StatisticList.vue';

@Component({
  components: {
    StatisticList,
    StatisticTop
  }
})
export default class Statistics extends Vue {
  type = '-';
  interval = 'week';

  updateType(value: string) {
    this.type = value;
  }

  updateInterval(value: string) {
    this.interval = value;
  }
}
</script>

<style lang="scss" scoped></style>
