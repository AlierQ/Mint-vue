<template>
  <div>
    {{week}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Prop} from 'vue-property-decorator';

@Component
export default class StatisticList extends Vue{
  @Prop(String) type: string | undefined;
  @Prop(String) interval: string | undefined;

  get recordList(){
    const recordList = this.$store.state.recordList as RecordItem[]
    if (this.type==='-'){
      return recordList.filter((record:RecordItem)=>{
        return record.type==='-';
      })
    }else{
      return recordList.filter((record:RecordItem)=>{
        return record.type==='+';
      })
    }
  }
  get week(){
    const recordList = this.recordList;
    let hash: { [key: string]: { title: string, items:RecordItem[]} } = {};
    for (let i = recordList.length-1; i >=0; i--) {
      const [date] = JSON.parse(JSON.stringify(recordList[i].createTime)).split('T');
      hash[date] = hash[date] || {title: date, items: []};
      hash[date].items.push(recordList[i]);
    }
    console.log(hash);
    return hash

  }
}
</script>

<style lang="scss" scoped>

</style>