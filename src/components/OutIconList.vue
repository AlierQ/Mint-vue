<template>
  <div class="icon-list">
    <ul>
      <li>
        <div class="one-icon"
             @click="select('catering')"
             :class="checked ==='catering' && 'selected'">
          <Icon name="catering"></Icon>
        </div>
        <div class="label">餐饮</div>
      </li>
      <li>
        <div class="one-icon"
             @click="select('shopping')"
             :class="checked ==='shopping' && 'selected'">
          <Icon name="shopping"></Icon>
        </div>
        <div class="label">购物</div>
      </li>

    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class OutIconList extends Vue {
  checked = '';

  select(name: string) {
    this.checked = name;
    // 清除
    // const element = event.currentTarget as HTMLDivElement;
    // element.classList.add('selected');
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.icon-list {
  //border: 1px solid red;
  display: flex;
  justify-content: center;

  ul {
    margin-top: 40px;
    width: 96vw;
    display: grid;
    grid-template-columns: repeat(auto-fill, 50px);
    grid-column-gap: 40px;
    grid-row-gap: 10px;
    justify-content: center;

    li {
      > .one-icon {
        border-radius: 50%;
        background: #F5F5F5;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        .icon {
          width: 32px;
          height: 32px;
          fill: #545353;
        }

        &.selected {
          background: #79c79f;
        }
      }

      > .label {
        text-align: center;
        color: $color-font;
      }
    }
  }
}
</style>