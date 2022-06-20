<template>
  <div class="nav-wrapper">
    <div class="content">
      detail.vue
      <p>
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
        内容 <br />
      </p>
    </div>
    <Nav></Nav>
  </div>
</template>

<script lang="ts">
export default {
  name: "Detail",
};
</script>

<style lang="scss" scoped>
.content {

  border: 1px solid blue;
  /* 超出内容滚动 */
  overflow: auto;
  /* 控制宽度占的份数,这里主轴是纵向的，所以变成了控制高度占的份数 */
  flex-grow: 1;
}
.nav-wrapper {
  border: 1px solid red;
  width: 100vw;
  height: 100vh;
  display: flex;
  //align-items: flex-end;
  flex-direction: column;
  //justify-content: flex-end;
}
</style>
