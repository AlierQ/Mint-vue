/**
* @Description: 输入面板
* @author AlierQ
* @date 23/6/2022
*/
<template>
  <div class="input-pad">
    <div class="output">{{ output }}</div>
    <div class="remark">
      <Icon name="remake"></Icon>
      <label>
        备注:&nbsp;
      </label>
      <input type="text" placeholder="点击填写备注"/>
    </div>
    <div class="pad">
      <table>
        <tr>
          <td @click="input">7</td>
          <td @click="input">8</td>
          <td @click="input">9</td>
          <td @click="empty" class="characters">清空</td>
        </tr>
        <tr>
          <td @click="input">4</td>
          <td @click="input">5</td>
          <td @click="input">6</td>
          <td @click="deleteNumber">
            <Icon name="clear"></Icon>
          </td>
        </tr>
        <tr>
          <td @click="input">1</td>
          <td @click="input">2</td>
          <td @click="input">3</td>
          <td @click="done" class="characters done" rowspan="2">完成</td>
        </tr>
        <tr>
          <td @click="input" colspan="2">0</td>
          <!-- <td>0</td> -->
          <td @click="input">.</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class InputPad extends Vue {
  output = '0';

  input(event: MouseEvent) {
    // event.target as HTMLDivElement 强制指定类型
    const clickElement = (event.target as HTMLDivElement);
    const str = (clickElement.textContent as string);
    if (clickElement) {
      // 没有小数点的请情况下长度最长为16位
      if (this.output.indexOf('.') === -1 && this.output.length === 16) {
        return;
      }
      // 小数点之后只能有两位
      if (this.output.indexOf('.') !== -1) {
        if (this.output.length === this.output.indexOf('.') + 3) {
          return;
        }
      }
      // 处理多次输入"."
      if (str === '.') {
        if (!(this.output.indexOf('.') !== -1)) {
          this.output += str;
        }
      } else {
        // 处理0的问题
        if (this.output === '0') {
          if (str === '0') {
            return;
          } else {
            this.output = str;
          }
        } else {
          this.output += str;
        }
      }
    }
  }

  empty() {
    this.output = '0';
  }

  deleteNumber() {
    this.output = this.output.slice(0, -1);
    if (this.output.length === 0) {
      this.output = '0';
    }
  }

  done() {

  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.input-pad {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .output {
    text-align: right;
    color: $color-font;
    font-size: 32px;
    padding-right: 10px;
    height: 60px;
    line-height: 60px;
    align-self: flex-end;
    // 首选字体Consolas,没有就指定任意的等宽字体monospace
    font-family: Consolas, monospace;
  }

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

  .pad {
    width: 100vw;
    flex-grow: 1;

    table {
      border-spacing: 0; /*把单元格间隙设置为0*/
      border-collapse: collapse;
      border: none;
      flex-direction: column;
      width: 100%;
      height: 100%;
      table-layout: fixed;

      tr {
        td {
          border: 1px solid #E8E8E8;
          color: $color-font;
          font-size: 22px;
          text-align: center;
        }

        .characters {
          font-size: 18px;
        }

        .done {
          background: $color-basic;
          border: 0;
        }
      }
    }
  }
}
</style>
