/**
 * @Description: Icon图标组件
 * @author AlierQ
 * @date 21/6/2022
*/
<template>
    <svg class="icon">
      <use :xlink:href="'#'+name" />
    </svg>
</template>

<script lang="ts">
// import引入所有svg icon
let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("../assets/icons", true, /\.svg/));
} catch (error) {
  console.log(error);
}
export default {
  name: 'Icon',
  props:['name']
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  //fill: currentColor;
  overflow: hidden;
}
</style>