<template>
  <div>
    <Layout>
      <template slot="top">
        <StatisticTop></StatisticTop>
      </template>
      <template slot="content">statistics.vue</template>
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
@Component({
  components:{
    StatisticTop
  }
})
export default class Statistics extends Vue {

}
</script>

<style lang="scss" scoped></style>
