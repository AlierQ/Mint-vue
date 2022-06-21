<template>
  <div class="nav">
    <router-link active-class="active" to="/detail">
      <svg>
        <use xlink:href="#deatil-noselected" />
      </svg>
      明细</router-link
    >&nbsp;
    <router-link active-class="active" to="/add">
      <svg>
        <use xlink:href="#add" />
      </svg>
      记一笔</router-link>&nbsp;
    <router-link active-class="active" to="/statistics">统计</router-link>
  </div>
</template>

<script lang="ts">
import "@/assets/icons/deatil-noselected.svg";
import "@/assets/icons/add.svg";
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
.nav {
  border: 1px solid #42b983;
}
</style>
