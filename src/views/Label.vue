<template>
  <div>
    <Layout>
      <template slot="top">头部</template>
      <template slot="content">内容</template>
      <template slot="bottom">底部</template>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Layout from '@/components/Layout.vue';
@Component({
  components:{
    Layout
  }
})
export default class Label extends Vue{
}
</script>

<style lang="scss" scoped>

</style>