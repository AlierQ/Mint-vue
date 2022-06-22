/**
 * @Description: 布局组件
 * @author AlierQ
 * @date 20/6/2022
*/
<template>
  <div class="layout">
    <div class="top">
      <slot name="top"></slot>
    </div>
    <div class="content">
      <!-- 插槽，父组件使用该组件可以将内容插到这里 -->
      <!-- 具名插槽 -->
      <!-- 给插槽命名，以便于父组件选择插入 -->
      <slot name="content"></slot>
    </div>
    <div class="bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Layout",
};
</script>

<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .content {
    /* 超出内容滚动 */
    overflow: auto;
    /* 控制宽度占的份数,这里主轴是纵向的，所以变成了控制高度占的份数 */
    flex-grow: 1;
  }
}
</style>
