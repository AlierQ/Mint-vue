/** * @Description: 底部导航栏组件 * @author AlierQ * @date 20/6/2022 */
<template>
  <nav>
    <router-link active-class="active" to="/detail" class="item">
      <Icon name="detail-noselected" />
      <span class="title">明细</span>
    </router-link>
    <router-link active-class="active" to="/add" class="item">
      <div class="add-bg">
        <Icon name="add" />
      </div>
      <span class="title">记一笔</span>
    </router-link>
    <router-link active-class="active" to="/statistics" class="item">
      <Icon name="statistics-noselected" />
      <span class="title">统计</span>
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  justify-content: space-evenly;
  padding: 4px 0;
  > .item {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    > .title {
      font-size: 14px;
      color:#3F3E3F;
    }
    > .icon {
      height: 32px;
      width: 32px;
      //fill:#42b983;
    }
    > .add-bg{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #42b983;
      display: flex;
      justify-content: center;
      align-items: center;
      margin:0 40px;
      .icon{
        width: 20px;
        height: 20px;
        fill:#333;
      }
    }
  }
}
</style>
