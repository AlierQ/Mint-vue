<template>
  <div id="main" style="width: 100vw; height: 200px;"></div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';
import * as echarts from 'echarts/core';
import {
  ToolboxComponent,
  ToolboxComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  LegendComponent,
  LegendComponentOption
} from 'echarts/components';
import {LineChart, LineSeriesOption} from 'echarts/charts';
import {UniversalTransition} from 'echarts/features';
import {CanvasRenderer} from 'echarts/renderers';

echarts.use([
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition
]);
type EChartsOption = echarts.ComposeOption<| ToolboxComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | LineSeriesOption>;

@Component
export default class StatisticEcharts extends Vue {
  chartDom: any;
  myChart: any;
  number = 123;
  @Prop(Object) option: EChartsOption | undefined;

  mounted() {
    this.chartDom = document.getElementById('main')!;
    this.myChart = echarts.init(this.chartDom);
    this.option && this.myChart.setOption(this.option);
  }

  @Watch('option', {deep: true})
  onOptionChange() {
    this.myChart.setOption(this.option);
  }
}
</script>

<style lang="scss" scoped>

</style>