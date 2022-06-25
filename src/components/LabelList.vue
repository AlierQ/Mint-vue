<template>
  <div class="icon-list">
    <ul>
      <li v-for="(item,index) in tagsData" :key="index">
        <div class="one-icon"
             @click="select(item.iconName,item.id)"
             :class="checked === item.iconName && 'selected'">
          <!-- :class="selected: true/false/判断表达式" 也可以空类的添加-->
          <Icon :name="item.iconName"></Icon>
        </div>
        <div class="label">{{ item.notes }}</div>
      </li>
      <!--      <li v-show="type === '+'" v-for="(item,index) in inTagsData" :key="index">-->
      <!--        <div class="one-icon"-->
      <!--             @click="select(item[0])"-->
      <!--             :class="checked === item[0] && 'selected'">-->
      <!--          &lt;!&ndash; :class="selected: true/false/判断表达式" 也可以空类的添加&ndash;&gt;-->
      <!--          <Icon :name="item[0]"></Icon>-->
      <!--        </div>-->
      <!--        <div class="label">{{ item[1] }}</div>-->
      <!--      </li>-->
      <!--      <li>-->
      <!--        <div class="one-icon"-->
      <!--             @click="select('catering')"-->
      <!--             :class="checked ==='catering' && 'selected'">-->
      <!--          <Icon name="catering"></Icon>-->
      <!--        </div>-->
      <!--        <div class="label">餐饮</div>-->
      <!--      </li>-->
      <li>
        <router-link to="/label" class="one-icon">
          <Icon name="setting"></Icon>
        </router-link>
        <div class="label">设置</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class LabelList extends Vue {
  checked = '';
  @Prop(Array) tagsData: any[] | undefined;
  @Prop(String) readonly type: string | undefined;

  select(iconName: string,id:string) {
    this.checked = iconName;
    this.$emit('get:checked',this.checked,id)
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