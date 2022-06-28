<template>
  <div class="container">
    <div class="top">
      <div class="back" @click="back">
        <div>
          <Icon name="back"></Icon>
        </div>
        <div>返回</div>
      </div>
      <div class="title">
        添加类别
      </div>
      <div class="done" @click="done">
        完成
      </div>
    </div>
    <div class="content">
      <div class="notes-input">
        <div class="icon-show">
          <Icon :name="checked"></Icon>
        </div>
        <div class="input">
          <input type="text" v-model="notes" placeholder="请输入类别名称（不超过4个汉字）">
        </div>
      </div>
      <div class="icon-list">
        <div v-for="(items,index) in iconNameList" :key="index">
          <div class="icon-title">{{ items.title }}</div>
          <ul>
            <li v-for="iconName in items.icons" :key="iconName">
              <div class="one-icon" @click="checked=iconName">
                <Icon :name="iconName"></Icon>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class LabelAdd extends Vue {
  checked = 'shopping';
  notes = '';
  @Prop(String) type: string | undefined;

  get iconNameList() {
    return this.$store.state.iconNameList;
  }

  back() {
    this.$emit('closePage');
  }

  done() {
    if (this.notes !== '') {
      console.log(this.notes.length);
      if (this.notes.length <= 4) {
        if (this.type === '-') {
          this.$store.commit('CREATE_TAG', [this.type, {iconName: this.checked, notes: this.notes}]);
        } else {
          this.$store.commit('CREATE_TAG', [this.type, {iconName: this.checked, notes: this.notes}]);
        }
        this.back();
      } else {
        alert('类别名太长!');
      }
    } else {
      alert('未输入类别名!');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.container {
  display: flex;
  flex-direction: column;
  color: $color-font;

  .top {
    height: 11%;
    background: $color-basic;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 10px;

    .back {
      display: flex;
      margin-left: 10px;
      font-size: 18px;
    }

    .title {
      font-size: 22px;
      padding-bottom: 8px;
    }

    .done {
      margin-right: 15px;
      font-size: 18px;
    }
  }

  .content {
    height: 89%;
    overflow: auto;
    background: #fff;
    display: flex;
    flex-direction: column;

    .notes-input {
      border: 1px solid #eeeeee;
      display: flex;
      align-items: center;

      .icon-show {
        margin: 10px 0 10px 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background: $color-basic;

        .icon {
          width: 28px;
          height: 28px;
          fill: #545353;
        }
      }

      .input {
        flex-grow: 1;
        margin-right: 20px;

        input {
          width: 100%;
          height: 45px;
          outline: 0;
          border: none;
          text-indent: 10px;
          font-size: 16px;
        }
      }
    }

    .icon-list {
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: auto;

      .icon-title {
        margin-top: 10px;
        text-align: center;
      }

      ul {
        margin-top: 5px;
        margin-bottom: 10px;
        width: 90vw;
        display: grid;
        grid-template-columns: repeat(auto-fill, 40px);
        grid-column-gap: 34px;
        grid-row-gap: 20px;
        justify-content: center;

        li {
          > .one-icon {
            border-radius: 50%;
            background: #F5F5F5;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;

            .icon {
              width: 28px;
              height: 28px;
              fill: #545353;
            }
          }
        }
      }
    }
  }
}
</style>