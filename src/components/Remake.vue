/**
* @Description: 输入面板中的备注
* @author AlierQ
* @date 23/6/2022
*/
<template>
  <div class="remark">
    <Icon name="remake"></Icon>
    <label>
      备注:&nbsp;
    </label>
    <input type="text" placeholder="点击填写备注"/>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Remake'
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.remark {
  background: #e6e7e8;
  border-radius: 5px;
  height: 40px;
  width: 96vw;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  > .icon {
    width: 22px;
    height: 22px;
    margin-left: 10px;
    fill: #2fb86b;
  }

  > label {
    color: $color-font;
    font-size: 18px;
    margin-left: 2px;
  }

  > input {
    outline: 0;
    flex-grow: 1;
    margin-right: 10px;
    height: 30px;
    border: none;
    background: #e6e7e8;
    font-size: 16px;
  }
}
</style>