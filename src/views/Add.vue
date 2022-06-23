/**
 * @Description: 
 * @author AlierQ
 * @date 20/6/2022 
*/
<template>
  <div>
    <Layout>
      <!-- 调用子组件并且将内容插到子元素内部的插槽中 -->
      <!-- 通过slot属性指定某一个插槽 -->
      <template slot="content">
        <div class="top">

        </div>
      </template>
      <template slot="content">add.vue</template>
      <template slot="bottom">
        <InputPad></InputPad>
      </template>
    </Layout>
  </div>
</template>

<script lang="ts">
import InputPad from "@/components/InputPad.vue";
export default {
  name: "ADD",
  components: { InputPad },
};
</script>

<style lang="scss" scoped></style>
